function find(arrToFind) {
  let result = [];
  let firstWord = arrToFind[0];
  firstWord = firstWord.split("");

  for (let i = 0; i < firstWord.length; i++) {
    let currentChar = firstWord[i];
    let isCommon = true;

    for (let j = 1; j < arrToFind.length; j++) {
      if (!arrToFind[j].includes(currentChar)) {
        isCommon = false;
        break;
      }
    }

    if (isCommon) {
      result.push(currentChar);
    }
  }
  console.log(result);
}

find(["vinicius", "vaca", "carla"]);
