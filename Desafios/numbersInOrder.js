function inAscOrder(arr) {
    const originalNumbers = arr;
    const ordenedNumbers = [...arr].sort((a,b) => a - b);
    const originalString = originalNumbers.toString();
    const ordenedString = ordenedNumbers.toString();
    let flag = false;
    
    if(originalString === ordenedString) {
        flag = true;
        return flag;
    }

    return flag;
}

inAscOrder([1, 2, 4, 7, 19])