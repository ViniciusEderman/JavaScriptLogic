function x(arr) {
    let pointerLeft = 0;              
    let pointerRigh = arr.length - 1;
    let max = arr[0];    

  while(pointerLeft <= pointerRigh) {
    if(arr[pointerLeft] > max) {
        max = arr[pointerLeft];
    }

    if(arr[pointerRigh] > max) {
        max = arr[pointerRigh];
    }

    pointerLeft++;
    pointerRigh--;
  }
  return max;
}

const arrayNumeros = [5, 3, 6, 120, 52, 96];
console.log(x(arrayNumeros));
