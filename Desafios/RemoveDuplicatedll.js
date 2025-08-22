function removeDuplicates(arr) {
  let count = 1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      count++;
    } else {
      count = 1;
    }

    if (count > 2) {
      arr.splice(i, 1);
      i--;
    }
  }

  console.log(arr);
  return arr;
}

removeDuplicates([0, 1, 1, 1, 2, 2, 3, 3]);
