function getConsecutiveNumbers(start, targetSum) {
    const result = [];
    let currentSum = 0;
    let currentNumber = start;
  
    while (currentSum < targetSum) {
      result.push(currentNumber);
      currentSum += currentNumber;
      currentNumber++;
    }
  
    if (currentSum !== targetSum) {
      return null; // se a soma for maior que o alvo, retorna null
    }
  
    return result;
  }

  // or

  function getConsecutiveNumbers(start, targetSum) {
    const result = [];
    let currentSum = 0;
  
    for (let currentNumber = start; currentSum < targetSum; currentNumber++) {
      result.push(currentNumber);
      currentSum += currentNumber;
    }
  
    if (currentSum !== targetSum) {
      return null;
    }
  
    return result;
  }
