function filterIngressEvent(events) {
    const result = {};

    events.forEach(({ Nome, Ingresso }) => {
        if (result[Ingresso]) {
            result[Ingresso]++;
          } else {
            result[Ingresso] = 1;
          }
    });
    console.log(result)
    return result;
}


const events = [
  { Nome: "Alice", Ingresso: "VIP" },
  { Nome: "Bob", Ingresso: "Regular" },
  { Nome: "Carlos", Ingresso: "VIP" },
  { Nome: "Diana", Ingresso: "Gratuito" },
  { Nome: "Eve", Ingresso: "Regular" },
];

filterIngressEvent(events)