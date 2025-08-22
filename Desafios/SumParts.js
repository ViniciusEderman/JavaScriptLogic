function partsSums(arr) {
    let result = [];
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    result.push(sum);

    for (let i = 0; i < arr.length; i++) {
        sum -= arr[i]; 
        result.push(sum);
    }

    console.log(result);
}

partsSums([0, 1, 3, 6, 10]);