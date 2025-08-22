function autocorrect(input) {
    const words = input.split(" ");
    let mappingArr = [];
  
    for(let i = 0; i < words.length; i++) {
      if(words[i].toLowerCase().slice(0, 3) === "you" || words[i].toLowerCase().slice(0, 2) === "u") {
        mappingArr.push("your sister")
      }
      else {
        mappingArr.push(words[i]);
      }
    }
  
    const result = mappingArr.join(" ");
    console.log(result);
    return result;
}
  
  autocorrect("i love youvile")