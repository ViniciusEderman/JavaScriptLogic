function main(palavra) {
  let leftCaracter = 0;
  let rightCaracter = 0;

  for (let i = 0; i < palavra.length; i++) {
    let caracter = palavra[i];

    if (caracter === "(") {
      leftCaracter++;
    } 
    else if (caracter === ")") {
      if (leftCaracter > 0) {
        leftCaracter--;
      } else {
        rightCaracter++;
      }
    }
  }
  return leftCaracter + rightCaracter;
}

main("()()");
