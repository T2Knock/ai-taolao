import { WebsocketHelper } from '@/helpers/websocket.helper';
import { FastifyPluginAsync } from 'fastify';

const chat: FastifyPluginAsync = async (fastify): Promise<void> => {
  fastify.get('/', async () => {
    WebsocketHelper.emit('message');
  });
};

export default chat;
