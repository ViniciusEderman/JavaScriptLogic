var kidsWithCandies = function (candies, extraCandies) {
  let maxValue = candies[0]; 
  
  for (let i = 1; i < candies.length; i++) {
    if (candies[i] > maxValue) {
      maxValue = candies[i];
    }
  }

  let result = [];

  for (let i = 0; i < candies.length; i++) {
    result.push(candies[i] + extraCandies >= maxValue);
  }

  return result;
};

kidsWithCandies([12, 1, 12], 10);