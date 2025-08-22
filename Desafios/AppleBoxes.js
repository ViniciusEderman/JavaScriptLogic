function appleBoxes(k) {
  let index = 0;
  const possibleNumbers = [];
  const oddNumbers = [];
  const evenNumbers = [];

  while (k > index) {
    possibleNumbers.push(k);
    k--;
  }

  for (let i = 0; i < possibleNumbers.length; i++) {
    if (possibleNumbers[i] % 2 === 0) {
      evenNumbers.push(possibleNumbers[i]);
    } else {
      oddNumbers.push(possibleNumbers[i]);
    }
  }

  let x = 0;
  for (let i = 0; i < evenNumbers.length; i++) {
    x = x + evenNumbers[i] * evenNumbers[i];
  }

  let c = 0;
  for (let i = 0; i < oddNumbers.length; i++) {
    c = c + oddNumbers[i] * oddNumbers[i];
  }

  return x - c;
}

console.log(appleBoxes(5));
