var mergeAlternately = function(word1, word2) {
    
    let result = [];
    const word1Length = word1.length;
    const word2Length = word2.length;

    if(word1Length > word2Length) {
        for(let i = 0; i < word1Length; i++) {
            result.push(word1[i]);
            result.push(word2[i])
        }
    }
    else {

        for(let i = 0; i < word2Length; i++) {
            result.push(word1[i]);
            result.push(word2[i])
        }

        for(let c = word1Length; c < word2; c++) {
            result.push(word2[i])
        }
        
    }

    return result;
};

mergeAlternately("ab", "ab");


// Solução 2:
var mergeAlternately2 = function (word1, word2) {
    let result = '';
    let maxLength = Math.max(word1.length, word2.length);

    for (let i = 0; i < maxLength; i++) {
        if (word1.length > i) result += word1[i];
        if (i < word2.length) result += word2[i];
    }

    return result;
};