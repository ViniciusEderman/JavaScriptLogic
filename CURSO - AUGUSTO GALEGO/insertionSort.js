function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const atual = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > atual) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = atual;
  }

  return arr;
}

console.log(insertionSort([7, 3, 5, 2]));
