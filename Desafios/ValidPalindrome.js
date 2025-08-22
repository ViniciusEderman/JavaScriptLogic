var isPalindrome = function(s) {

    const newString = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let result = [];

    for(let i = newString.length -1 ; i >= 0; i--) {
        result.push(newString[i])
    }

    const invertedString = result.join("");


    console.log(newString);
    console.log(invertedString)

    if(invertedString === newString || newString === "") {
        return true;
    }

    return false;
};

isPalindrome("0P")