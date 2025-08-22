var countBits = function (n) {
  let x = 0;
  let binarys = [];
  let result = [];

  while (x <= n) {
    let toBinary = x.toString(2);
    binarys.push(toBinary);
    x++;
  }

  for (let i = 0; i < binarys.length; i++) {
    let number = binarys[i];
    let onesToSum = 0;

    for (let j = 0; j < number.length; j++) {
      let casting = number[j];
      if (casting != 0) {
        onesToSum = onesToSum + 1;
      }
    }

    if (onesToSum != 0) {
      result.push(onesToSum);
    } else {
      result.push(0);
    }
  }

  return result;
};

countBits(5);

//maneira mais simples de resolver, ainda sem usar operadores binários
var countBits2 = function (n) {
  let ans = new Array(n + 1);
  ans[0] = 0; // inicializa o array com o 1 bit 0 = 0

  for (let i = 1; i <= n; i++) {
    ans[i] = ans[Math.floor(i / 2)] + (i % 2);
  }

  return ans;
};
