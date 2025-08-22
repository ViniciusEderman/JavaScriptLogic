var relativeSortArray = function (arr1, arr2) {
  let remainingItens = [];
  let sameItens = {};

  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      remainingItens.push(arr1[i]);
    } else {
      sameItens[arr1[i]] = (sameItens[arr1[i]] || 0) + 1;
    }
  }

  let result = [];

  for (let j = 0; j < arr2.length; j++) {
    const countItens = sameItens[arr2[j]];

    for (let k = 0; k < countItens; k++) {
      result.push(arr2[j]);
    }
  }

  const sortedItens = remainingItens.sort((a, b) => a - b);

  for (let c = 0; c < sortedItens.length; c++) {
    result.push(sortedItens[c]);
  }

  return result;
};

console.log(
  relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6])
);
