function orderArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    let isSorted = true;
    console.log(arr);

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        isSorted = false;
      }
    }

    if (isSorted) {
      break;
    }

  }
  return arr;
}

orderArr([1, 2, 3, 4]);

// INPUT -> valores positivos != 0
