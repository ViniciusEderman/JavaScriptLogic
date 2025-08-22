function count(string) {
    
    if(string === '') {
        return {};
    }

    let result = {};

    for(let i = 0; i < string.length; i++) {
        let char = string[i];

        if(!result[char]) {
            result[char] = 1;
        } else {
            result[char] += 1;
        }
    }
    
   return result;
}

count('AaBbbBCcCcCc');