function vaporcode(string) {
  
    let result = [];
    const joingString = string.split(' ').join('');

    for(let i = 0; i < joingString.length; i++) {
      let upperCaseLetter = joingString[i].toUpperCase();
      result.push(upperCaseLetter, " ", " ");
    }

    let finalString = result.join("");
    finalString = finalString.trim()
    
    return finalString;
}

vaporcode("Why isnt my code working");