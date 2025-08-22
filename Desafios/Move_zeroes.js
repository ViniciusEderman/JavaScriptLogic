var moveZeroes = function (nums) {
  let lastNonZeroFoundAt = 0; // 1

  for (let i = 0; i < nums.length; i++) { // 3 < 3
    if (nums[i] !== 0) {
      nums[lastNonZeroFoundAt] = nums[i]; // [1,0,1]
      lastNonZeroFoundAt++; // 0 + 1
    }
  } //[1,0,1]

  for (let i = lastNonZeroFoundAt; i < nums.length; i++) {  // 3 < 3
    nums[i] = 0; 
  }
  // 1 = 0 [1,0,0]
  return nums;
};

moveZeroes([0,0,1]);