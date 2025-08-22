function majorityElement(nums) {

  let maxCount = 0;
  let majorityElement = 0;
  let cleanArr = new Set(nums);
  cleanArr = [...cleanArr];

  for (let i = 0; i < cleanArr.length; i++) {
    let count = 0;

    for (let j = 0; j < nums.length; j++) {
      if (cleanArr[i] === nums[j]) {
        count++;
      }
    }

    if (count > maxCount) {
      maxCount = count;
      majorityElement = cleanArr[i];
    }
  }
  return majorityElement;
}

majorityElement([2, 2, 1, 1, 1, 2, 2, 3, 3, 3]);
