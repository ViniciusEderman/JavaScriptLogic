function check(arr) {
   let totalSumArr = 0;
   let sumLeft = 0;
   let result = 0;

   for(let i = 0; i < arr.length; i++) {
     totalSumArr += arr[i];
   }

   for(let left = 0; left < arr.length - 1; left++) {
        sumLeft = sumLeft + arr[left];  
        let sumRight = totalSumArr - sumLeft;

        if(sumLeft >= sumRight) {
            result++;
        }
   }

   return result;
}

check([10, 4, -8, 7]);