var waysToSplitArray = function (nums) {
  let totalSum = 0;
  let sumLeft = 0;

  for (let left = 0; left < nums.length - 1; left++) {
    let sumRight = 0;
    sumLeft += nums[left];

    for (let right = left + 1; right < nums.length; right++) {
      sumRight += nums[right];
    }

    if (sumLeft >= sumRight) {
      totalSum++;
    }
  }

  return totalSum;
};

//console.log(waysToSplitArray([2, 3, 1, 0]));

var waysToSplitArrayNow = function (nums) {
  // some todos os valores do array,
  // percorra até o penultimo elemento
  // pegue o left = left + i
  // crie o rigth = totalSum - left

  //cheque se left >= right, se sim o count ++ 
};

console.log(waysToSplitArrayNow([6,-1,9]));
