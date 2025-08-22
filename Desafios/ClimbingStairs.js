var climbStairs = function(n) {
    if (n <= 1) return 1; 

    let a = 1;
    let b = 2;

    for(let i = 3; i < n; i++) {
        let sum = a + b; 
        a = b;
        b = sum;
    }

    return b;
};
climbStairs(7)


// podemos usar includes 
function searchValue(arr, value) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === value) {
            console.log(i)
            return i;
        }
    }

    return -1;
}

searchValue([1,2,3,5,6,7,11,14,15], 5);