// forma brutal
const intToRoman = function (num) {
  let roman = "";

  while (num > 0) {
    if (Math.floor(num / 1000) > 0) {
      let M = Math.floor(num / 1000);
      roman += "M".repeat(M);
      num -= 1000 * M;
    } else if (Math.floor(num / 900) > 0) {
      let CM = Math.floor(num / 900);
      roman += "CM".repeat(CM);
      num -= 900 * CM;
    } else if (Math.floor(num / 500) > 0) {
      let D = Math.floor(num / 500);
      roman += "D".repeat(D);
      num -= 500 * D;
    } else if (Math.floor(num / 400) > 0) {
      let CD = Math.floor(num / 400);
      roman += "CD".repeat(CD);
      num -= 400 * CD;
    } else if (Math.floor(num / 100) > 0) {
      let C = Math.floor(num / 100);
      roman += "C".repeat(C);
      num -= 100 * C;
    } else if (Math.floor(num / 90) > 0) {
      let XC = Math.floor(num / 90);
      roman += "XC".repeat(XC);
      num -= 90 * XC;
    } else if (Math.floor(num / 50) > 0) {
      let L = Math.floor(num / 50);
      roman += "L".repeat(L);
      num -= 50 * L;
    } else if (Math.floor(num / 40) > 0) {
      let XL = Math.floor(num / 40);
      roman += "XL".repeat(XL);
      num -= 40 * XL;
    } else if (Math.floor(num / 10) > 0) {
      let X = Math.floor(num / 10);
      roman += "X".repeat(X);
      num -= 10 * X;
    } else if (Math.floor(num / 9) > 0) {
      let IX = Math.floor(num / 9);
      roman += "IX".repeat(IX);
      num -= 9 * IX;
    } else if (Math.floor(num / 5) > 0) {
      let V = Math.floor(num / 5);
      roman += "V".repeat(V);
      num -= 5 * V;
    } else if (Math.floor(num / 4) > 0) {
      let IV = Math.floor(num / 4);
      roman += "IV".repeat(IV);
      num -= 4 * IV;
    } else {
      let I = Math.floor(num / 1);
      roman += "I".repeat(I);
      num -= 1 * I;
    }
  }

  return roman;
};

// forma mais perfomatica:
const intToRoman2 = function (num) {
  const symbols = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" },
  ];

  let roman = "";

  for (const { value, symbol } of symbols) { 
    while (num >= value) {
      roman += symbol;
      num -= value; 
    }
  }

  return roman;
};

console.log(intToRoman(58));
console.log(intToRoman2(58));
