function salePrice(cost){  
  const phones = cost.split("\n");
  const prices = phones.map(text => Number(text.slice(text.indexOf("$") + 1)));

  const updatePricesToSale = prices.map(price => {
    const nonRounded = Math.round(price + price * 0.15);
    return Math.ceil(nonRounded / 5) * 5;
  });

  const saleText = phones.map((text, i) => text.slice(0, text.indexOf("$") + 1).replaceAll("cost", "sale") + updatePricesToSale[i]);

  console.log(saleText.join("\n"));
  return saleText.join("\n");
}

salePrice(`\
iPhone 7 cost price: $800
Samsung note 7 cost price: $600
iPad pro cost price: $700`);