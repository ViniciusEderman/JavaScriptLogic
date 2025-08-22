function canJump(nums) {
  let auxArr = [];
  let length = nums.length;

  for (let i = 0; i < nums.length - 1; i++) {
    // 2
    let number = nums[i];

    // 0 > 0 
    while (number > 0) { 
        // [2, 1]
      auxArr.push(number);
      number--;
    }
    // [2, 1]

    // [aux]
    for (let c = 0; c < auxArr.length; c++) {
        // 1 < 2
      if (auxArr[c] < length) {
        if (i + auxArr[c] === nums.length - 1) {
          console.log("true");
          return true;
        }
      }
    }
  }
}

//testes
//canJump([2, 0]); // true
canJump([2,3,1,1,4]); // true
//canJump([3,1,3,1,0,4,5]) //  true*/
//canJump([3,1,0,1,0,4,5]) //  false
//canJump([3,2,1,0,4]) //  false
