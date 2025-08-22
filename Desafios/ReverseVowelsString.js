var reverseVowels = function(s) {
    const vowelsInString = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    let auxArr = [];
    let stringToArr = s.split("");

    for(let i = 0; i < stringToArr.length; i++) {
        if(vowelsInString.includes(stringToArr[i])) {
            auxArr.push(stringToArr[i]);
            stringToArr[i] = "@@"
        }
    }
    
    auxArr = auxArr.reverse();
    let index = 0;

    for(let i = 0; i < stringToArr.length; i++) {
        if(stringToArr[i] === "@@") {
            stringToArr[i] = auxArr[index];
            index += 1;
        }
    }

    return stringToArr.join("");
};

reverseVowels("IceCreAm");