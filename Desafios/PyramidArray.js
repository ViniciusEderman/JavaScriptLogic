function pyramid(n) {
   if(n === 0) { return [] };

   let result = [];
   let index = 1;

   while(n >= index) {
    result.push(Array(index).fill(1));
    index++;
   }

   return result;
}

console.log(pyramid(5))