//mocando valores:

const list = [
  ['name1', '0001', '15.90'], 
  ['name2', '0002', '05.50'], 
  ['name3', '00007', '150.20'],
  ['name04', '000033', '01.89'], 
  ['name06', '001533', '89.90'],
  ['name09', '215151', '19.75']
];

function listFilter(list, min, max) {
  let result = {};
  let priceToNumber = 0;
  let nameProduct = '';

  for (let i = 0; i < list.length; i++) {
    priceToNumber = list[i][2];
    priceToNumber = parseFloat(priceToNumber);

    if (priceToNumber >= min && priceToNumber <= max) {
      nameProduct = list[i][0];
      result[nameProduct] = priceToNumber;
    }
  }

  return result;
}

listFilter(list, 10, 25);