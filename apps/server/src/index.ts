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
