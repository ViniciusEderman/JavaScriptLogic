// você receberá um array com no min 2 valores, dentro do array sempre terá 2 valores que somados resultarão em index(valor que você deve encontrar com 2 valores somados do array)

let actualN = 0;
function test(arr, index) {
    
    for(let i = 0; i < arr.length; i++) {
        for(let c = i + 1; c < arr.length; c++) {
            if(arr[i] + arr[c] === index) {
                console.log(arr[i],arr[c])
            }
        }
    }
}

test([10,20,3,2,1,3,0,88,-33,22,11,4], 55);