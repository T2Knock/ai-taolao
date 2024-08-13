import { promptsHandler } from '@/controllers/api/prompts.controller';
import { queryPromptsSchema } from '@/schemas/prompts.schema';
import { FastifyInstance } from 'fastify';

export default async (fastify: FastifyInstance) => {
  fastify.post('/', { schema: queryPromptsSchema }, promptsHandler);
};
