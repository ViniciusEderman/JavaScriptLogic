function binarySearch(nums, k) {
  let left = 0;
  let right = nums.length - 1;
  let mid = Math.floor(nums.length / 2);

  let steps = 0;

  while (left <= right) {
    steps++;

    if (k === nums[mid]) {
      console.log("passos dados:" + steps);
      return mid;
    }

    if (k > nums[mid]) {
      left = mid + 1;
    }

    if (k < nums[mid]) {
      right = mid - 1;
    }

    mid = Math.floor((left + right) / 2);
  }

  console.log("passos dados:" + steps);
  return -1;
}

console.log(
  binarySearch(
    [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
      40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57,
      58, 59, 60,
    ],
    23
  )
); // return index
