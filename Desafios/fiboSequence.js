function resultSequenceFibo(number) {
  // o retorno precisa ser um array com a sequencia preenchida de acordo com o valor do number
  // ex: number = 5, preencher o array com os 5 primeiros numeros da sequencia -> 0,1,1,2,3

  // basic case: 
  if (number <= 0) {
    return "number needs be > 0";
  }

  if (number === 1) {
    return [0];
  }

  if (number === 2) {
    return [0, 1];
  }

  let value = 1; 
  let oldValue = 0;
  let result = [0, 1];

  while (result.length < number) {
    let nextValue = value + oldValue; 
    oldValue = value; 
    value = nextValue; 

    result.push(nextValue); 
  }
  console.log(result);
  return result
}

resultSequenceFibo(1);