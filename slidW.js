function slidingWindow(nums, k) {
  let subArrays = [];

  for (let i = 0; i <= nums.length - k; i++) {
    let tempArray = [];
    for (let j = i; j < i + k; j++) {
      tempArray.push(nums[j]);
    }
    subArrays.push(tempArray);
  }

  console.log(subArrays);
}

slidingWindow([1, 4, 2, 10, 23, 3, 1, 0, 20], 4);


// AGORA VAMOS REFAZER USANDO A TECNICA DE DESLIZAMENTO DE JANELA
function aplicandoOAlgoritmo(nums, k) {
  if (nums.length < k) return null;

  let maxSum = 0;
  let windowSum = 0;

  for (let i = 0; i < k; i++) { // 0<4 1° janela
    windowSum += nums[i];
  }

  maxSum = windowSum;

  for (let i = k; i < nums.length; i++) {
    windowSum = windowSum - nums[i - k] + nums[i]; 
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}

const nums = [1, 4, 2, 10, 23, 3, 1, 0, 20];
const k = 4;
console.log(aplicandoOAlgoritmo(nums, k));
