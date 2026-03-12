import { GoogleGenerativeAI } from '@google/generative-ai';
import { KNOWLEDGE_BASE } from '@/lib/knowledge';

// Initialize the Google Generative AI with the API key
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!process.env.GEMINI_API_KEY) {
      return new Response(
        JSON.stringify({ error: 'Gemini API key not configured' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Extract the latest user message
    const latestMessage = messages[messages.length - 1];

    if (!latestMessage || latestMessage.role !== 'user') {
      return new Response(JSON.stringify({ error: 'Invalid message format' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Convert chat history format to Gemini format
    // Exclude the system prompt since we handle it separately
    let history = messages
      .slice(0, -1)
      .map((msg: any) => ({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.content }],
      }));

    // Gemini API requires the first message in history to be from the 'user'.
    // Since our initial greeting is a 'model' message, we must filter it out if it is at the very beginning.
    if (history.length > 0 && history[0].role === 'model') {
        history = history.slice(1);
    }

    // For gemini-flash-latest which is fast and good for chat
    const model = genAI.getGenerativeModel({
      model: 'gemini-flash-latest',
      systemInstruction: KNOWLEDGE_BASE,
      generationConfig: {
        maxOutputTokens: 800,
        temperature: 0.7,
      },
    });

    const chat = model.startChat({
      history,
    });

    // Start streaming the response
    const result = await chat.sendMessageStream(latestMessage.content);

    // Create a ReadableStream to stream the response back to the client
    const stream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of result.stream) {
            const chunkText = chunk.text();
            if (chunkText) {
              // Format as SSE (Server-Sent Events) for easy consumption on the frontend
              controller.enqueue(new TextEncoder().encode(`data: ${JSON.stringify({ text: chunkText })}\n\n`));
            }
          }
          // End the stream
          controller.enqueue(new TextEncoder().encode('data: [DONE]\n\n'));
          controller.close();
        } catch (error) {
          console.error('Error in streaming:', error);
          controller.error(error);
        }
      },
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });
  } catch (error: any) {
    console.error('Chat API Error:', error);
    return new Response(
      JSON.stringify({ error: 'An error occurred while processing your request', details: error.message, stack: error.stack }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
