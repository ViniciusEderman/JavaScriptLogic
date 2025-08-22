const longestConsecutive = function (nums) {
  if (nums.length === 0) return 0;
  const uniqueNums = Array.from(new Set(nums)).sort((a, b) => a - b);

  let longest = 1;
  let currentStreak = 1;

  for (let i = 1; i < uniqueNums.length; i++) {
    if (uniqueNums[i] === uniqueNums[i - 1] + 1) {
      currentStreak++;
    } 
    else {
      longest = Math.max(longest, currentStreak);
      currentStreak = 1;
    }
  }

  return Math.max(longest, currentStreak);
};

console.log(longestConsecutive([0, -1]));
