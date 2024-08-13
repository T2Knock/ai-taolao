import 'fastify';

declare module 'fastify' {
  export interface FastifyInstance {
    someSupport(): string;
    config: {
      PORT: number;
      OPENAI_API_KEY: string;
    };
  }
}
