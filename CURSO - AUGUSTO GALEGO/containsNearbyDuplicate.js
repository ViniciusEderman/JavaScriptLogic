var containsNearbyDuplicate = function (nums, k) {
  for (let left = 0; left < nums.length; left++) {
    for (
      let right = left + 1;
      right <= Math.min(left + k, nums.length - 1);
      right++
    ) {
      if (nums[left] === nums[right]) {
        return true;
      }
    }
  }
  return false;
};

console.log(containsNearbyDuplicate([1, 0, 1, 1], 1));
