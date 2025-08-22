function quicksort(arr, left, right) {
  if (left < right) {
    let pi = partition(arr, left, right);

    quicksort(arr, left, pi - 1);
    quicksort(arr, pi + 1, right);
  }
}

function partition(arr, left, right) {
  let pivot = arr[right];
  let i = left - 1;

  for (let j = left; j < right; j++) {
    if (arr[j] <= pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];

  return i + 1;
}

let arr = [10, 7, 8, 9, 1, 5];
quicksort(arr, 0, arr.length - 1);

console.log(arr);
