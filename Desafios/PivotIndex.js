// BRUTE SOLUTION
const pivotIndex = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let sumRight = 0;
    let sumLeft = 0;

    for (let j = 0; j < i; j++) {
      sumLeft += nums[j];
    }

    for (let j = i + 1; j < nums.length; j++) {
      sumRight += nums[j];
    }

    if (sumLeft === sumRight) {
      return i; // return index
    }
  }

  return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));

// CLEAN SOLUTION: prefix-sum
const pivotIndexCleanSolution = function (nums) {
  let totalSumArr = 0;
  let leftSum = 0;

  for (i in nums) {
    totalSumArr += nums[i];
  }

  for (let i = 0; i < nums.length; i++) {
    if (leftSum == totalSumArr - nums[i] - leftSum) {
      return i;
    }
    leftSum += nums[i];
  }

  return -1;
};

console.log(pivotIndexCleanSolution([1, 7, 3, 6, 5, 6]));
