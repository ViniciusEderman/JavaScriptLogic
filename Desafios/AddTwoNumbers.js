const addTwoNumbers = function(l1, l2) {
    
    let firsSumValues = "";
    let secondSumValues = "";

    for (let i = l1.length - 1; i >= 0; i--) {
        firsSumValues += l1[i];
    }


    for(let i = l2.length - 1; i >=0; i--) {
        secondSumValues += l2[i];
    }

    const resultSums = Number(firsSumValues) + Number(secondSumValues);
    const resultsToString = resultSums.toString();
    const result = [];

    for(let i = resultsToString.length - 1; i >= 0; i--) {
        result.push(Number(resultsToString[i]));
    }
    
    return result;
};

console.log(addTwoNumbers([2,4,3], [5,6,4]));
