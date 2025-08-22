function list_order(num) {

    const numToArr = String(num).split('');
    const toNumbers = numToArr.map(Number);
    
    return toNumbers.sort((a, b) => a - b)

}

console.log(list_order(84323))