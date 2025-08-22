const largestAltitude = function(gain) {

    let newArr = [];
    let copy = gain[0];
    newArr.push(copy);
    let newValue = newArr[newArr.length - 1];
 
    for(let i = 1; i < gain.length; i++) {
        newValue += gain[i];
        newArr.push(newValue);
    }

    let highValue = newArr[0];
    if (!newArr.includes(0)) {
        newArr.push(0);
    }

    for(let i = 1; i < newArr.length; i++) {
        if(highValue < newArr[i]) {
            highValue = newArr[i];
        }
    }

    return highValue;
};

console.log(largestAltitude([-32,-68,-94,3,-69,17,-68,-6,16,78,-45,-68,31,79,-22,100,57,21,27,-51,0,62]));