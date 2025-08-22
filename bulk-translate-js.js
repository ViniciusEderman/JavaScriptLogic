function chunkArray(array, chunkSize) {
  const chunks = [];

  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }

  return chunks;
}

function translateToBulk(data, notifyURL) {
  const providerPayload = { messages: [] };

  for (let i = 0; i < data.length; i++) {
    providerPayload.messages.push({
      destinations: [
        {
          to: data[i].ddi + data[i].phone,
        },
      ],
      text: data[i].message,
      notifyURL,
    });
  }
  return providerPayload;
}

// mock do lote para testar:
const mockRequest = Array.from({ length: 10 }, (_, i) => ({
  ddi: "55",
  phone: `99999999${i}`,
  message: `Mensagem ${i + 1}`,
}));

const chunks = chunkArray(mockRequest, 5); // tamanho do lote é 5
const translatedPayloads = chunks.map((chunk) => translateToBulk(chunk, ""));
const dataToSendToProvider = 
//console.log("Chunks:", JSON.stringify(chunks, null, 2));
console.log(JSON.stringify(translatedPayloads, null, 2));