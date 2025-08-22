function chunkArray<T>(array: T[], chunkSize: number): T[][] {
  const chunks: T[][] = [];

  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }

  return chunks;
}

function translateLotToProvider(
  data: { ddi: string; phone: string; message: string }[],
  notifyUrl?: string
): { messages: any[] } {
  const providerPayload = { messages: [] as any[] };

  for (let i = 0; i < data.length; i++) {
    const messagePayload: any = {
      destinations: [
        {
          to: data[i].ddi + data[i].phone,
        },
      ],
      text: data[i].message,
    };

    if (notifyUrl) {
      messagePayload.notifyUrl = notifyUrl;
    }

    providerPayload.messages.push(messagePayload);
  }

  return providerPayload;
}

// mock data to test:
const mockRequest = Array.from({ length: 3000 }, (_, i) => ({
  ddi: "55",
  phone: `99999999${i}`,
  message: `Mensagem ${i + 1}`,
}));
const chunks = chunkArray(mockRequest, 1000);
const translatedPayloads = chunks.map((chunk) =>
  translateLotToProvider(chunk)
);

//teste com o notifyURL
const translatedPayloadsWithNotify = chunks.map((chunk) => translateLotToProvider(chunk, "https://example.com/notify"));