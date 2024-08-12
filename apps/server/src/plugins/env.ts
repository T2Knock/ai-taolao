import fastifyEnv, { FastifyEnvOptions } from '@fastify/env';
import fp from 'fastify-plugin';

const schema = {
  type: 'object',
  required: ['PORT', 'OPENAI_API_KEY'],
  properties: {
    PORT: {
      type: 'number',
      default: 4000
    },
    OPENAI_API_KEY: {
      type: 'string'
    }
  }
};

const options: FastifyEnvOptions = {
  schema: schema,
  dotenv: true
};

/**
 * @fastify/env Fastify plugin to check environment variables.
 *
 * @see https://github.com/fastify/fastify-env
 */
export default fp<FastifyEnvOptions>(async (fastify) => {
  fastify.register(fastifyEnv, options).ready((err) => {
    if (err) {
      fastify.log.error(err);
      process.exit(1);
    }
  });

  await fastify.after();
});
