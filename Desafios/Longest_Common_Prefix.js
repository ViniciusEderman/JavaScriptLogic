var longestCommonPrefix = function (strs) {
  let result = "";
  let compareWord = strs[0];

  for (let i = 0; i < compareWord.length; i++) {
    let char = compareWord[i];

    for (let c = 1; c < strs.length; c++) {
      if (strs[c][i] !== char) {
        return result;
      }
    }

    result = result + char;
  }

  return result;
};

longestCommonPrefix(["dog", "racecar", "car"]);
