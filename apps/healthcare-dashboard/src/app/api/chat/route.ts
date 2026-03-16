import { StreamingTextResponse } from "ai";

export async function POST(req: Request) {
  const { messages } = await req.json().catch(() => ({ messages: [] }));

  // Fixed AI generated mock response
  const hardcodedMessage =
    "Patient shows signs of improvement. Recommend discharging tomorrow. Ensure follow-up scheduled in 2 weeks to monitor cardiovascular stability and medication adherence.";

  // Generate a rudimentary stream
  const encoder = new TextEncoder();
  const readable = new ReadableStream({
    async start(controller) {
      const words = hardcodedMessage.split(" ");
      for (const word of words) {
        controller.enqueue(encoder.encode(word + " "));
        // sleep slightly to simulate streaming
        await new Promise((r) => setTimeout(r, 50));
      }
      controller.close();
    },
  });

  return new StreamingTextResponse(readable);
}
