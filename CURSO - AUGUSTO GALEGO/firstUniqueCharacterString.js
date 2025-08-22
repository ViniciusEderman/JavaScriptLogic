var firstUniqChar = function (s) {
  const characters = {};

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    characters[char] = (characters[char] || 0) + 1;
  }

  let i = 0;

  for (let i = 0; i < s.length; i++) {
    if (characters[s[i]] === 1) {
      return i;
    }
  }

  return -1;
};

console.log(firstUniqChar("leetcode"));
