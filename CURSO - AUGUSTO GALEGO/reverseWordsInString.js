var reverseWords = function (s) {
  const words = s.split(" ");
  
  for (let i = 0; i < words.length; i++) {
    let chars = words[i].split("");
    let left = 0;
    let right = chars.length - 1;

    while (left < right) {
      let temp = chars[left];
      chars[left] = chars[right];
      chars[right] = temp;

      left++;
      right--;
    }

    words[i] = chars.join("");
  }

  return words.join(" ");
};

reverseWords("Let's take LeetCode contest");
