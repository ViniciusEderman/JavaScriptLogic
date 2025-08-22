function quatroUm(arr) {
  if (arr.length === 0) {
    return 0;
  }

  return arr[0] + quatroUm(arr.slice(1));
}

console.log(quatroUm([2, 4, 6])); // Resultado: 12


function countListNumbers(arr) {
  if(arr.length === 0 ) {
    return 0;
  }

  return 1 + countListNumbers(arr.slice(1));
}

console.log(countListNumbers([2, 4, 6])); // Resultado: 3


function findMaxRecursive(arr, index = 0, max = -Infinity) {
  if (index === arr.length) {
    return max;
  }

  return findMaxRecursive(arr, index + 1, arr[index] > max ? arr[index] : max);
}

console.log(findMaxRecursive([2, 4, 6])); // Resultado: 6
