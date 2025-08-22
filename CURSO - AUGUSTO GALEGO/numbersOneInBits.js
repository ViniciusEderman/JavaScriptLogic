var hammingWeight = function(n) {

    let result = '';

    while(n > 0) {
        let rest = n % 2;
        result += rest;
        n = Math.floor(n / 2);
    }
    
    let countOnes = 0;
    
    for(let i = 0; i < result.length; i++) {
        let checkNumber = Number(result[i]);

        if(checkNumber === 1) {
            countOnes++;
        }
    }

    return countOnes;
};

console.log(hammingWeight(2147483645));
