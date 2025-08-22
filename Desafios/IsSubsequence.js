function isSubsequence(s, t) {

    let j = 0; 
    const foundChars = [];

    for (let i = 0; i < t.length; i++) {
        if (j < s.length && t[i] === s[j]) {
            foundChars.push(t[i]); 
            j++; 
        }
    }

    console.log(foundChars.join('') === s)
    return foundChars.join('') === s;
}

isSubsequence("abc", "ahbgdc");