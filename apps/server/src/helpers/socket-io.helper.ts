import { PING_INTERVAL, PING_TIMEOUT, WEB_SOCKET_PATH } from '@/constants';
import { FastifyBaseLogger, FastifyInstance } from 'fastify';
import { Server, Socket } from 'socket.io';
import listeners from '@/listeners';

class SocketIOHelper {
  private static io: Server;
  private static logger: FastifyBaseLogger;

  static initSocket(fastify: FastifyInstance) {
    // NOTE: only use websocket no polling
    SocketIOHelper.io = new Server(fastify.server, {
      pingInterval: PING_INTERVAL,
      pingTimeout: PING_TIMEOUT,
      transports: ['websocket'],
      path: WEB_SOCKET_PATH
    });

    SocketIOHelper.logger = fastify.log;

    SocketIOHelper.io.on('connection', (socket) => {
      fastify.log.info(`Client connected ${socket.id}`);

      SocketIOHelper.initListeners(socket);
    });
  }

  static initListeners(socket: Socket) {
    socket.on('disconnect', () =>
      SocketIOHelper.logger.info(`Client disconnected ${socket.id}`)
    );

    Object.entries(listeners).forEach(([key, listener]) =>
      socket.on(key, (data) => listener(socket, data))
    );
  }

  public static emit(event: string, data: unknown) {
    SocketIOHelper.io.emit(event, data);
  }
}

export { SocketIOHelper };
