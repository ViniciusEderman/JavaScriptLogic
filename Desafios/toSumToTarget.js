// brute force:
function searchTargeWithTwoNumbers(nums, target) {

    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            let sum = nums[i] + nums[j];
            
            if(sum === target) {
                return [i, j];
            }
        }
    }
    return 0;
}

console.log(searchTargeWithTwoNumbers([2, 10, 11, 15], 9));

// usando hash map
function searchTargeWithTwoNumbersBetter(nums, target) {
  const seen = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (seen.has(complement)) {
      return [seen.get(complement), i];
    }

    seen.set(nums[i], i);
  }

  return 0;
}
console.log(searchTargeWithTwoNumbersBetter([2, 7, 11, 15], 9));
