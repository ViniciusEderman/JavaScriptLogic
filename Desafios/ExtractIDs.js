function extractIds(data) {
  const interator = [data];
  let result = [];

  while (interator.length > 0) {
    const current = interator.pop();

    if (current.id) {
      result.push(current.id);
    }

    if (current.items) {
      current.items.forEach((item) => {
        interator.push(item);
      });
    }
  }

  console.log(result.sort((a, b) => a - b));
  return result.sort((a, b) => a - b);
}

extractIds({
  id: 1,
  items: [{ id: 2 }, { id: 3, items: [{ id: 4 }, { id: 5 }] }],
});
