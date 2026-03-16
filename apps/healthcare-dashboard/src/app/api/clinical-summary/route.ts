const mockedSummary =
  "Patient shows signs of improvement. Recommend discharging tomorrow.";

export async function POST() {
  const encoder = new TextEncoder();
  let index = 0;

  const stream = new ReadableStream({
    start(controller) {
      const interval = setInterval(() => {
        if (index >= mockedSummary.length) {
          clearInterval(interval);
          controller.close();
          return;
        }

        controller.enqueue(encoder.encode(mockedSummary[index]));
        index += 1;
      }, 15);
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
