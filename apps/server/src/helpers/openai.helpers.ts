import { FastifyInstance } from 'fastify';
import OpenAI from 'openai';

class OpenAIHelper {
  private static openAI: OpenAI;

  static init(fastify: FastifyInstance) {
    this.openAI = new OpenAI({
      apiKey: fastify.config.OPENAI_API_KEY
    });
  }

  public static getOpenAI() {
    return this.openAI;
  }

  public static async getResponse() {
    return await this.openAI.chat.completions.create({
      messages: [{ role: 'user', content: 'Say this is a test' }],
      model: 'gpt-3.5-turbo'
    });
  }
}

export { OpenAIHelper };
