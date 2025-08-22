function separateEvenOddNumbers(arr) {
    let evenIndex = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) { 
            const evenNumber = arr[i];
            for (let j = i; j > evenIndex; j--) {
                arr[j] = arr[j - 1];
            }
            arr[evenIndex] = evenNumber;
            evenIndex++;
        }
    }

    console.log(arr);
}

separateEvenOddNumbers([3, 1, 2, 4, 7, 6]);
// input sempre será inteiros positivos != 0
//output esperado: [2, 4, 6, 3, 1, 7]
//obs não utilizar um array auxiliar, apenas modificar o original