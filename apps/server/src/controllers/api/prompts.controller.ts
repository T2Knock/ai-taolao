import { STANDARD } from '@/constants';
import { handleServerError } from '@/helpers/errors.helpers';
import { OpenAIHelper } from '@/helpers/openai.helpers';
import { Prompts } from '@/schemas/prompts.schema';
import { RouteHandler } from 'fastify';
import { ChatCompletion } from 'openai/resources/index.mjs';

export const promptsHandler: RouteHandler<{
  Body: Prompts;
  Reply: unknown;
}> = async function (req, reply) {
  try {
    const { message } = req.body;
    const responses = (await OpenAIHelper.getResponse(
      message
    )) as ChatCompletion;
    const content = responses.choices[0]?.message.content;

    reply.code(STANDARD.OK.statusCode).send({
      content
    });
  } catch (error) {
    handleServerError(reply, error);
  }
};
