function teste(nums1, m, nums2, n) {

   
};

teste([1,2,3,0,0,0], 3, [2,5,6], 3);


var merge = function(nums1, m, nums2, n) {
    while(nums2.length < nums1.length) {
        nums2.push(0);
    }

    let index = 0;

    for(let i = 0; i < nums1.length; i++) {
        if(nums1[i] === 0) {
            nums1[i] = nums2[index];
            index++
        }
    }
   
    nums1 = nums1.sort((a, b) => a - b);
    return nums1;
};
