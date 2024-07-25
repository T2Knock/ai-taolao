import { WebsocketHelper } from '@/helpers/websocket.helper';
import { FastifyPluginAsync } from 'fastify';
import { faker } from '@faker-js/faker';

const chat: FastifyPluginAsync = async (fastify): Promise<void> => {
  fastify.get('/', async (request, reply) => {
    const intervalId = setInterval(() => {
      const randomText = faker.lorem.sentence();
      WebsocketHelper.emit('test-chat', randomText);
    }, 1000);

    // Stop sending messages after 30 seconds
    setTimeout(() => {
      clearInterval(intervalId);
    }, 30000);
  });
};

export default chat;
