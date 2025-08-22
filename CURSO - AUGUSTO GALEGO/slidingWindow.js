var maximumLengthSubstring = function (s) {
  let max = 0;

  for (let i = 0; i < s.length; i++) {
    const characters = {};
    let currentLength = 0;

    for (let c = i; c < s.length; c++) {
      characters[s[c]] = (characters[s[c]] ?? 0) + 1;

      if (characters[s[c]] > 2) {
        console.log("sua sequencia ultrapassou 2, end...");
        break;
      }

      currentLength++;

      if (currentLength > max) {
        max = currentLength;
      }
    }
  }
  return max;
};

console.log(maximumLengthSubstring("bcbbbcba"));
