function removeArr(arr) {
  let result = [];
  result.push(arr[1]);

  for (let i = 1; i < arr.length; i++) {
    let addArr = arr[i + 2];
    result.push(addArr);
    addArr += 1;
  }

  let filteredArray = arr.filter((item) => !result.includes(item));
  if (filteredArray.length > 1) {
    filteredArray = filteredArray[1];
  }

  const resultArr = arr.filter((item) => !filteredArray.includes(item));
  return resultArr;
}

removeArr(["Bob", "Lorna", "Desiree", "Melissa", "Josh"]);