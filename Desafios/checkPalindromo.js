function isPalindromo(word) {
    let result = [];
    let x = '';

    for(let i = 0; i < word.length; i++) {
        x = word[word.length - 1 - i];
        result.push(x);
    }

    const wordCompare = result.join('');
    
    if(wordCompare === word) {
        return true;
    }

    return false;
}

isPalindromo('word')