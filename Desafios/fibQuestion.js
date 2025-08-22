function isFibo(a, b, f) {
  if (f === b || f === a) {
    return true;
  }

  let sum = a + b;

  while (f >= sum) {
    if (f === sum) {
      return true;
    }

    a = b;
    b = sum;
    sum = a + b
  }
  return false;
}

isFibo(4, 5, 23);
