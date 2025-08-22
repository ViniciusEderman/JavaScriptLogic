// fazendo essa questão de forma bruta:
var findDifference = function (nums1, nums2) {
  let resultNum1 = [];
  let resultNum2 = [];

  for (let i = 0; i < nums1.length; i++) {
    let checkValue = nums1[i];
    let found = false;

    for (let c = 0; c < nums2.length; c++) {
      if (checkValue === nums2[c]) {
        found = true;
        break;
      }
    }

    if (found === false) {
      resultNum1.push(checkValue);
    }
  }

  for (let i = 0; i < nums2.length; i++) {
    let checkValue = nums2[i];
    let found = false;

    for (let c = 0; c < nums1.length; c++) {
      if (checkValue === nums1[c]) {
        found = true;
        break;
      }
    }

    if (found === false) {
      resultNum2.push(checkValue);
    }
  }

  const uniqueResultNum1 = [...new Set(resultNum1)];
  const uniqueResultNum2 = [...new Set(resultNum2)];
  const result = [uniqueResultNum1, uniqueResultNum2];

  return result;
};

// fazendo essa questão de forma perfomatica:
var findDifference = function (nums1, nums2) {
    const set1 = new Set(nums1); // itens unicos do arr1
    const set2 = new Set(nums2);

    const resultNum1 = [...set1].filter(item => !set2.has(item)); 
    const resultNum2 = [...set2].filter(item => !set1.has(item));
  
    
    return [resultNum1, resultNum2];
};

findDifference([1, 2, 3, 3], [1, 1, 2, 2]);