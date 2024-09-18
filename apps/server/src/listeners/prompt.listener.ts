import { OpenAIHelper } from '@/helpers/openai.helpers';
import { Socket } from 'socket.io';

export const handleTextPrompts = async (
  socket: Socket,
  data: { message: string }
) => {
  const stream = await OpenAIHelper.getCompletionStream(data.message);

  for await (const chunk of stream) {
    socket.emit(
      'chat:completion-response',
      chunk.choices[0]?.delta?.content || ''
    );
  }
};
