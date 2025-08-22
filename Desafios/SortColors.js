/*
Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

Example 1:

Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
Example 2:

Input: nums = [2,0,1]
Output: [0,1,2]
*/

const sortColors = function (nums) {
  quicksort(nums, 0, nums.length - 1);
  return nums;
};

function quicksort(arr, left, right) {
  if (left < right) {
    const pivot = partition(arr, left, right);
    quicksort(arr, left, pivot - 1); // recursividade no lado esquerdo
    quicksort(arr, pivot + 1, right); // recursividade no lado direito
  }
}

function partition(arr, left, right) {
  let pivot = arr[right];
  let i = left - 1;

  for (let j = left; j < right; j++) {
    if (arr[j] <= pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];

  return i + 1;
}

console.log(sortColors[[2, 0, 2, 1, 1, 0]]);
