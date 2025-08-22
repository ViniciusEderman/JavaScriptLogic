const countBits = function(n) {
    if(n <= 0) { return 0 }

    let pointer = 0;
    let result = [];
    let current = n;
    let sum = 0;

    while(current > 0) {
       pointer = current % 2;
       if (pointer === 1) { sum++ }
       current = Math.floor(current / 2);
       result.push(pointer);
    }

    
    return sum;
};

console.log(countBits(1234))