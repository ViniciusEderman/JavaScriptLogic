var findMaxAverage = function (nums, k) {
  let maxSum = 0;
  let currentSum = 0;

  for (let i = 0; i < k; i++) {
    currentSum += nums[i];
  }
 
  maxSum = currentSum;

  for (let c = k; c < nums.length; c++) {
    currentSum = currentSum - nums[c - k] + nums[c];
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum / k;
};

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 5));
