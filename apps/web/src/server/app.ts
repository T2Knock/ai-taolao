import Fastify, { type FastifyRequest } from "fastify";
import { type FastifyReplyType } from "fastify/types/type-provider";

const fastify = Fastify({
  logger: true,
});

fastify.get("/", async (request: FastifyRequest, reply: FastifyReplyType) => {
  return { hello: "world" };
});

/**
 * Run the server!
 */
const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

await start();
