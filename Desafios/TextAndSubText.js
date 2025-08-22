function removeSubTextOfText(text, subtext) {
    const textToArr = text.split(' ');
    const subTextLength = subtext.split(' ').length;
    const result = [];

    for(let i = 0; i < textToArr.length; i++) {
        const chunk = textToArr.slice(i, i + subTextLength).join(' ');
        
        if(chunk === subtext) {
            i+= subTextLength - 1; 
        }
        else {
            result.push(textToArr[i]);
        }
    }

    console.log(result.join(' '));
    return result.join(' ');
}

removeSubTextOfText("sua mãe é uma beleza rara", "uma beleza");
