import { STANDARD } from '@/constants/request';
import { FastifyPluginAsync } from 'fastify';

const root: FastifyPluginAsync = async (fastify): Promise<void> => {
  fastify.get('/ping', () => ({ status: STANDARD.OK.message }));
};

export default root;
