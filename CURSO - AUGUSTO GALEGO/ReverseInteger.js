var reverse = function (x) {
  let result = "";

  if (x < 0) {
    result += "-";
  }

  let numberToString = String(x);

  for (right = numberToString.length - 1; right >= 0; right--) {
    let temp = Number(numberToString[right]);

    if (!isNaN(temp)) {
      result += numberToString[right];
    }
  }

  if(Number(result) >= -2147483648 && Number(result <= 2147483647)) {
    return Number(result);
  }

  return 0;
};

console.log(reverse(-2300)); 
