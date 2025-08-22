var removeDuplicates = function (nums) {
   
    let k = 1; 

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[k - 1]) {  
            nums[k] = nums[i]; 
            k++; 
        }
    } 
    return k; 
};

var removeDuplicates = function (nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            for (let j = i + 1; j < nums.length - 1; j++) {
                nums[j] = nums[j + 1];
            }

            nums.length--;
            i--;
        }
    }
    const k = nums.length;
    return k;
};

removeDuplicates([0,0,1,1,1,2,4])