const romanToInt = function(s) {

    let sum = 0;
    const stringToArr = s.split('');
    const table = {
        'I': 1,
        'IV': 4,
        'IX': 9,
        'V': 5,
        'X': 10,
        'XL': 40,
        'L': 50,
        'XC': 90,
        'C': 100,
        'D': 500,
        'CD': 400,
        'CM': 900,
        'M': 1000
    }

    
    for (let i = 0; i < stringToArr.length; ) {
        const twoChar = stringToArr[i] + (stringToArr[i + 1] || '');

        if (table[twoChar]) {
            sum += table[twoChar];
            i += 2;
        } else {
            sum += table[stringToArr[i]];
            i += 1;
        }
    }

    return sum;
};

console.log(romanToInt('MCMXCIV'));