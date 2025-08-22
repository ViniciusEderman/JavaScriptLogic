function x(arr){

    const ordenedArr = arr.sort((a, b) => a-b);
    let count = 1;
    let maxCount = 1;

    console.log(ordenedArr);

    for(let i = 0; i < ordenedArr.length; i++) {
        if (ordenedArr[i] === ordenedArr[i + 1] - 1) {
            count++;
        } 
        else if (ordenedArr[i] !== ordenedArr[i + 1] - 1) {

           if(count > maxCount) {
             maxCount = count;
           }
           count = 1;
        }
        else {
            if(count > maxCount) {
                maxCount = count;
            }
        }
    }
 // log -> maxCount
    return maxCount;
}

x([100,105,4,200,1,3,104,2, 101, 102, 103]);