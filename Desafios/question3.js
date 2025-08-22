function dashatize(num) {
    let numStr = num.toString();
    let arr = [];

    for (let i = 0; i < numStr.length; i++) {
        let currentNum = parseInt(numStr[i]);
        let prevNum = parseInt(numStr[i - 1]);

        if (i > 0) {
            if (currentNum % 2 !== 0 && prevNum % 2 !== 0) {
                arr.push('-');
            }
        }

        arr.push(numStr[i]);

        if (i === numStr.length - 1 && currentNum % 2 !== 0) {
            arr.push('-');
        }
    }
    console.log(arr.join(''))
    return arr.join('');
}

dashatize(274)