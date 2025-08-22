function rotateArr(nums, k) {

  let result = new Array(nums.length);

  for (let i = 0; i < nums.length; i++) {
    let index = (i + k) % nums.length;

    result[index] = nums[i];
  }

  for (let i = 0; i < nums.length; i++) {
    nums[i] = result[i];
  }

  return nums;
}

rotateArr([1, 2, 3, 4, 5, 6, 7], 3);
