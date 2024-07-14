import fastifyEnv from '@fastify/env';
import fp from 'fastify-plugin';

const schema = {
  type: 'object',
  required: ['PORT'],
  properties: {
    PORT: {
      type: 'number',
      default: 4000
    }
  }
};

const options = {
  schema: schema
};

export default fp(async (fastify) => {
  fastify.register(fastifyEnv, options).ready((err) => {
    if (err) {
      fastify.log.error(err);
      process.exit(1);
    }
  });

  await fastify.after();
});
