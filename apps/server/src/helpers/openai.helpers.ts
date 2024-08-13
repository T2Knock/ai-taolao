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

  public static async getResponse(message: string, stream = false) {
    return await this.openAI.chat.completions.create({
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: message }
      ],
      model: 'gpt-4o-mini',
      stream
    });
  }
}

export { OpenAIHelper };
