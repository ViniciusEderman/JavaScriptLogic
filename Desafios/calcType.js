function calcType(a, b, res) {
  console.log(a);
  console.log(b);
  console.log(res);

  if(a + b === res) {
    return "addition";
  }

  if(a - b === res) {
    return "subtraction";
  }

  if(a * b === res) {
    return "multiplication"
  }

  return "division";
}

// 2 forma:
function calcTypeTwo(a, b, res) {

    const mapping = [
      { name: 'addition', calc: (x, y) => x + y },
      { name: 'subtraction', calc: (x, y) => x - y },
      { name: 'multiplication', calc: (x, y) => x * y },
      { name: 'division', calc: (x, y) => x / y },
    ]

    for(const map of mapping) {
        if(map.calc(a, b) === res) {
            return map.name;
        }
    }
}


calcType(10,4,40);
calcTypeTwo(10,4,40);