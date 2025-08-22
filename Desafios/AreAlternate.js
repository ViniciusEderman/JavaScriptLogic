function isAlt(word) {
  if (word.length === 1) return false;

  const vowels = ["a", "e", "i", "o", "u"];

  for (let i = 0; i < word.length - 1; i++) {
    const isCurrentVowel = vowels.includes(word[i]);
    const isNextVowel = vowels.includes(word[i + 1]);

    if (isCurrentVowel === isNextVowel) {
      return false;
    }
  }

  return true;
}

isAlt("kowewuz");
