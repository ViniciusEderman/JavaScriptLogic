function duplicateCount(text){

    text = text.toLowerCase();
    let result = [];

    for(let i=0; i < text.length; i++) {
        for(let c = i + 1; c < text.length; c++) {
            if(text[i] == text[c]){
                result.push(text[i])
            }
        }
    }

    const filter = new Set(result);
    const filtredResult = [...filter];
    const resultLength = filtredResult.length;

    console.log(resultLength);
    return resultLength
}
  
duplicateCount("aabBcde")