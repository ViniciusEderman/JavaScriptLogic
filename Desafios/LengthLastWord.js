const lengthOfLastWord = function(s) {
    const words = s.split(" ")
    let result = [];


    words.forEach(word => {
        if(word !== ''){
            result.push(word)
        }
    });

    let lengthLastWord = result[result.length - 1]
    return lengthLastWord.length
};

lengthOfLastWord("   fly me   to   the moon  ");