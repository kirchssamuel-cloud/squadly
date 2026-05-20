import { NextRequest } from 'next/server';
import { z } from 'zod';
import { getAnthropic, CLAUDE_MODEL, BRIEF_BUILDER_SYSTEM_PROMPT } from '@/lib/anthropic';

export const runtime = 'nodejs';
export const maxDuration = 60;

const MessageSchema = z.object({
  role: z.enum(['user', 'assistant']),
  content: z.string().min(1).max(8000)
});

const BodySchema = z.object({
  messages: z.array(MessageSchema).min(1).max(40)
});

export async function POST(req: NextRequest) {
  let payload: unknown;
  try {
    payload = await req.json();
  } catch {
    return new Response('JSON invalide', { status: 400 });
  }

  const parsed = BodySchema.safeParse(payload);
  if (!parsed.success) {
    return new Response('Champs manquants', { status: 400 });
  }

  const anthropic = getAnthropic();

  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    async start(controller) {
      try {
        const response = await anthropic.messages.stream({
          model: CLAUDE_MODEL,
          max_tokens: 1024,
          system: BRIEF_BUILDER_SYSTEM_PROMPT,
          messages: parsed.data.messages
        });

        for await (const event of response) {
          if (event.type === 'content_block_delta' && event.delta.type === 'text_delta') {
            controller.enqueue(encoder.encode(event.delta.text));
          }
        }
        controller.close();
      } catch (err) {
        console.error('[brief] anthropic error', err);
        controller.enqueue(encoder.encode('\n\n[erreur côté serveur, réessayez]'));
        controller.close();
      }
    }
  });

  return new Response(stream, {
    headers: {
      'content-type': 'text/plain; charset=utf-8',
      'cache-control': 'no-store'
    }
  });
}
