// brute force
const missingNumber = function (nums) {
  const sortedArr = nums.sort((a, b) => a - b);

  if (sortedArr[0] != 0) {
    return 0;
  }

  let result = 0;

  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i] + 1 !== sortedArr[i + 1]) {
      result = sortedArr[i] + 1;
      break;
    }
  }

  return result;
};

//console.log(missingNumber([1]));

function theBestSolution(nums) {
  let x = 0;

  for (const num of nums) {
    x ^= num;
  }

  for (let i = 0; i <= nums.length; i++) {
    x ^= i;
  }

  return x;
}
console.log(theBestSolution([1, 0, 3]));
