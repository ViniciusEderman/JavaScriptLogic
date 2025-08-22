//QUESTÃO:
/*Questão 3: Mover Elementos Menores que K
Dado um array de inteiros e um número K, mova todos os elementos menores que K para o início do array, mantendo a ordem relativa dos elementos que são menores e dos que são maiores ou iguais a K.

Exemplo:
Entrada: nums = [8, 5, 3, 10, 2, 7, 6], K = 6
Saída esperada: [5, 3, 2, 8, 10, 7, 6]*/

function moveElements(arr, k) {
    let numsSmallerK = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < k) {
            let temp = arr[i];

            for (let j = i; j > numsSmallerK; j--) {
                arr[j] = arr[j - 1];
            }

            arr[numsSmallerK] = temp;
            numsSmallerK++; 
        }
    }
    console.log(arr);
    return arr;
}

moveElements([8, 5, 3, 10, 2, 7, 6], 6);