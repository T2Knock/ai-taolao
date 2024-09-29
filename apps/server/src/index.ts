import { join } from 'path';
import Fastify from 'fastify';
import autoLoad from '@fastify/autoload';
import { SocketIOHelper } from './helpers/socket-io.helper';
import { OpenAIHelper } from './helpers/openai.helpers';

const fastify = Fastify({
  logger: {
    transport: {
      target: 'pino-pretty',
      options: {
        destination: 1,
        colorize: true,
        translateTime: 'HH:MM:ss.l',
        ignore: 'pid,hostname'
      }
    }
  }
});

fastify.register(autoLoad, {
  dir: join(__dirname, 'plugins')
});

fastify.register(autoLoad, {
  dir: join(__dirname, 'routes')
});

const initHelpers = async () => {
  SocketIOHelper.initSocket(fastify);
  OpenAIHelper.init(fastify);
};

const start = async () => {
  try {
    await fastify.ready();
    await initHelpers();

    await fastify.listen({ port: fastify.config.PORT });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();

fastify.io.on('connection', (socket:any) => {
  console.log('A client connected:', socket.id);

  // Handle incoming messages from clients
  socket.on('message', (msg:string) => {
    console.log('Message received:', msg);
    // Broadcast the message to all connected clients
    fastify.io.emit('message', msg);
  });

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });
});