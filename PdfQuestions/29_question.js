let x1 = 10
let x2 = 20
let x3 = 30
let armazena = 0;
let soma;

if (x1 > x2 && x1 > x3) {
  armazena = x1;
} else if (x2 > x1 && x2 > x3) {
  armazena = x2;
} else {
  armazena = x3;
}

if (armazena === x1) {
  if (x2 > x3) {
    soma = armazena + x2;
  } else {
    soma = armazena + x3;
  }
} else if (armazena === x2) {
  if (x1 > x3) {
    soma = armazena + x1;
  } else {
    soma = armazena + x3;
  }
} else {
  if (x1 > x2) {
    soma = armazena + x1;
  } else {
    soma = armazena + x2;
  }
}

console.log(soma);

// outra forma de fazer:

let value1, value2, valu3;

value1 = 30
value2 = 60
value3 = 10

let arr = [value1, value2, valu3];
arr.sort((a, b) => b - a);

console.log(arr[0] + arr[1]);
