function maxProfit(prices) {
  let minValue = prices[0];
  let maxProfit = 0;
  let calcProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minValue) {
      minValue = prices[i];
    }

    calcProfit = prices[i] - minValue;

    if (calcProfit > maxProfit) {
      maxProfit = calcProfit;
    }
  }

  return maxProfit;
}

maxProfit([2, 1, 2, 0, 1]);
