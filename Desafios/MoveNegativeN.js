function moveNegativeNumbers(arr) {
    let lastNegativeFoundAt = 0

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < 0) { // index = 1 
            let temp = arr[lastNegativeFoundAt]; // 5
            arr[lastNegativeFoundAt] = arr[i]; // [-1, 5, -2,3,1]
            arr[i] = temp; // [-1, 5, -2,3,1]
            lastNegativeFoundAt++ // 0+1 = 1
        }
    }

    console.log(arr)
}
moveNegativeNumbers([5,-1,-2,3,1]); 
// output esperado => [-1,-2, 5,3,1] 