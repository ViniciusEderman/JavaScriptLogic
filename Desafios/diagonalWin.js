function diagonal(matrix) {
  let principalDiagonal = [];
  let secondDiagonal = [];
  let sumFirst = 0;
  let sumSecond = 0;

  for (let i = 0; i < matrix.length; i++) {
    let addValue = matrix[i][i];
    principalDiagonal.push(addValue);

    let addSecondValue = matrix[i][matrix.length - 1 - i];
    secondDiagonal.push(addSecondValue);
  }

  for (let i = 0; i < principalDiagonal.length; i++) {
    sumFirst += principalDiagonal[i];
    sumSecond += secondDiagonal[i];
  }

  if (sumFirst > sumSecond) {
    return "Principal Diagonal win!";
  } else if (sumSecond > sumFirst) {
    return "Secondary Diagonal win!";
  }

  return "Draw!";
}

diagonal([
  [1, 2, 2, 5, 1],
  [4, 1, 6, 1, 1],
  [1, 8, 5, 6, 2],
  [1, 5, 2, 1, 2],
  [1, 8, 2, 6, 1],
]);
