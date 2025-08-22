function returnFactorialNumber(number) {
    
    if(number === 1) {
        return 1
    }

    let index = 0;
    let calc = 0;
    let previousNumber = number - 1; 

    while(number > index) {
        calc = number * previousNumber;
        number = calc
        previousNumber = previousNumber - 1;
        
        if(previousNumber === 0) {
            break;
        }

        index++;
    }

    return number;
}

returnFactorialNumber(1)