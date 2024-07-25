import { PING_INTERVAL, PING_TIMEOUT, WEB_SOCKET_PATH } from '@/constants';
import { FastifyBaseLogger, FastifyInstance } from 'fastify';
import { Server, Socket } from 'socket.io';

class WebsocketHelper {
  private static io: Server;
  private static logger: FastifyBaseLogger;

  static initSocket(fastify: FastifyInstance) {
    // NOTE: only use websocket no polling
    WebsocketHelper.io = new Server(fastify.server, {
      pingInterval: PING_INTERVAL,
      pingTimeout: PING_TIMEOUT,
      transports: ['websocket'],
      path: WEB_SOCKET_PATH
    });

    WebsocketHelper.logger = fastify.log;

    WebsocketHelper.io.on('connection', (socket) => {
      fastify.log.info(`Client connected ${socket.id}`);

      WebsocketHelper.initListeners(socket);
    });
  }

  static initListeners(socket: Socket) {
    socket.on('disconnect', () => {
      WebsocketHelper.logger.info(`Client disconnected ${socket.id}`);
    });
  }

  public static emit(event: string, data: unknown) {
    WebsocketHelper.io.emit(event, data);
  }
}

export { WebsocketHelper };
