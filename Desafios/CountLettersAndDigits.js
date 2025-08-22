function countLettersAndDigits(input) {
  const specialChars = Object.fromEntries(
    [...".!@#$%^&*()_-+=~`|\\{}[]:;\"'<>,.?/"].map((char) => [char, true])
  );

  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    const char = input[i];

    if (char && !specialChars[char] && char !== " ") {
      sum++;
    }
  }

  console.log(`Total: ${sum}`);
  return sum;
}

countLettersAndDigits("nVOR4R;rm']W9kLLyK uZ`E5E1UOy6FYG]N*~?;k+wwTz}3+'");
