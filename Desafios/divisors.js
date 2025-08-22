function divisors(integer) {
    console.log(integer);
    let index = 2;
    let result = [];

    while(index <= integer) {  
        if(integer % index === 0) {
            result.push(index)
        }
        index++
    }

    if(result.length === 1) {
        return `${integer} is prime`;
    }

    const filtredResult = result.pop()
    return result;
}

divisors(30);