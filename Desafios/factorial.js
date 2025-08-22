function factorial(n) {
    if(n === 0 || n===1) {return 1}

    let index = 0;
    let actualNumber = n;
    let previusNumber = n - 1;
    let multiplication = 0;

    while(index < n) {
        if(previusNumber !== 0) {
            multiplication = actualNumber * previusNumber;
        }
        actualNumber = multiplication; 
        previusNumber = previusNumber - 1;
        index++;
    }
    console.log(multiplication)
    return multiplication;
}   

factorial(10);