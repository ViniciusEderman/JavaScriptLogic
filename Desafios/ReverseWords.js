const reverseWords = function (s) {
  const result = [];
  const noSpaceWords = s.trim();
  const words = noSpaceWords.split(/\s+/);

  for(let i = words.length - 1; i >= 0; i--) {
    result.push(words[i])
  }

  const revertedString = result.join(' ')
  console.log(revertedString)
  return revertedString
};

reverseWords("um bom exemplo");
