// não é necessário validar position, sempre será um valor inteiro positivo
function fibValue(position) {

  if (position === 1) {
    return 0;
  }

  let index = 2;
  let value = 1;
  let oldValue = 0;
  let nextValue = 0;

  while (index < position) { 
    nextValue = value + oldValue;
    oldValue = value; 
    value = nextValue; 

    index++;
  }

  console.log(value);
  return value;
}

fibValue(4);
