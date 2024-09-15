import { FastifySchema } from 'fastify';
import { FromSchema } from 'json-schema-to-ts';

const promptsSchema = {
  $id: 'prompts',
  type: 'object',
  properties: {
    message: {
      type: 'string'
    }
  },
  required: ['message']
} as const;

export type Prompts = FromSchema<typeof promptsSchema>;

export const queryPromptsSchema: FastifySchema = {
  tags: ['Prompts'],
  description: 'Query a prompts to open ai chat completion',
  body: promptsSchema,
  response: {
    200: {
      description: 'The post was created',
      properties: {
        content: { type: 'string' }
      }
    }
  }
};
