import Fastify from "fastify";

const fastify = Fastify({
  logger: true,
});

fastify.get("/", () => {
  return { hello: "world" };
});

/**
 * Run the server!
 */
const start = async (): Promise<void> => {
  try {
    await fastify.listen({ port: 3000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start().catch((error) => {
  fastify.log.error(error);
});
