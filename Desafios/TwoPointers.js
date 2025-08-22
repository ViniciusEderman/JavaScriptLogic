// QUESTÃO => Dado um array de números positivos inteiros, cheque qual a maior sequência de valores que se aproximam ou chegam ao valor do target

function testTwoPointers(nums, target) {
  let currentSum = 0;
  let maxSequence = 0;
  let left = 0;
  let bestSequence = [];

  for (let right = 0; right < nums.length; right++) {
    currentSum = currentSum + nums[right];

    while (currentSum > target) {
      currentSum = currentSum - nums[left];
      left++;
    }

    if(right - left + 1 > maxSequence) {
        maxSequence = right - left + 1;
        bestSequence = nums.slice(left, right + 1);
    }
  }

  return bestSequence;
}

console.log(testTwoPointers([1, 0, 1, 1, 2, 3, 4, 1], 3));
