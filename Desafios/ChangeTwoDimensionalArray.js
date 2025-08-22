function matrix(array) {

  for(let i = 0; i < array.length; i++) {
    if(array[i][i] < 0) {
        array[i][i] = 0
    }
    array[i][i] = 1
  }

  return array;
}

matrix([[-1, 4, -5, -9, 3],[6, 8, -7, 4, -5],[3, 5, 1, -9, -1],[1, 5, -7, 15, -9],[-3, 2, 1, -5, -6]]);