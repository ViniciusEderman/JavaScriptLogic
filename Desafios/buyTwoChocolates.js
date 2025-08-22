var buyChoco = function(prices, money) {
    const sortedPrices = prices.sort((a,b) => a - b);

    if(sortedPrices.length < 2) {
        return;
    }

    const total = sortedPrices[0] + sortedPrices[1];

    if(money >= total) {
        return money - total;
    }

    return money;
};

console.log(buyChoco([3,2,3], 3));
