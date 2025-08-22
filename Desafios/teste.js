
function rootValues(a, b, c) {
  if(a === 0) {
    return 'A must be different from 0'
  }

  const delta = (b * b) - (4 * a * c);

  let rootDelta = 0;
  let firstRoot = 0;
  let secondRoot = 0;
  
  if(b < 0) {
    rootDelta = Math. sqrt(delta);
    firstRoot = (Math.abs(b) + rootDelta) / (2 * a);
    secondRoot = (Math.abs(b) - rootDelta) / (2 * a);
  }

  if(b > 0) {
    rootDelta = Math. sqrt(delta);
    firstRoot = ((b * -1) + rootDelta) / (2 * a);
    secondRoot = ((b * -1) - rootDelta) / (2 * a);
  }

  console.log(firstRoot)
  console.log(secondRoot)
   
}

rootValues(1, -3, -10)