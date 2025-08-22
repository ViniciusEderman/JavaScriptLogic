function sumDigits(number) {
  const abs = Math.abs(number);
  const numbersString = abs.toString();
  const arrNumbers = numbersString.split("");

  let sum = Number(arrNumbers[0]); 

  if (arrNumbers.length > 1) {
    let secondValue = Number(arrNumbers[1]);
    sum += secondValue;
  }

  for (let i = 2; i < arrNumbers.length; i++) {
    sum += Number(arrNumbers[i]);
  }

  return sum;
}