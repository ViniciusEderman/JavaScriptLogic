function josephus(items, k) {
  let nextIndexToRemove = k - 1;
  let result = [];

  while (items.length > 0) {
    nextIndexToRemove = nextIndexToRemove % items.length;
    let value = items.splice(nextIndexToRemove, 1)[0];
    result.push(value);

    nextIndexToRemove += k - 1;
  }

  return result;
}

console.log(josephus([1, 2, 3], 19));
