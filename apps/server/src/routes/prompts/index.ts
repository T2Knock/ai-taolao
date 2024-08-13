import { STANDARD } from '@/constants';
import { OpenAIHelper } from '@/helpers/openai.helpers';
import { FastifyInstance } from 'fastify';

export default async (fastify: FastifyInstance) => {
  fastify.get('/', async (req, reply) => {
    const prompts = await OpenAIHelper.getResponse();

    reply.code(STANDARD.OK.statusCode).send({
      ...prompts
    });
  });
};
