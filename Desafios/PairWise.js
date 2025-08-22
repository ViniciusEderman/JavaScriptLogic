function pairwise(arr, n) {
    const usedIndexes = new Set();
    let result = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === n && !usedIndexes.has(i) && !usedIndexes.has(j)) {
                result += i + j;
                usedIndexes.add(i);
                usedIndexes.add(j);
            }
        }
    }

    console.log(result)
    return result;
}

pairwise([0, 0, 0, 0, 1, 1], 1);
