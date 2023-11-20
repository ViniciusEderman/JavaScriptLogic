/*
RESPOSTA EM JS:
*/

const arr = [5, 1, 4, 2, 7, 8, 3, 6];
let aux;

for(let i = 7; i >= 4; i--) {
    aux = arr[i];
    arr[i] = arr[7 - i + 1]
    arr[7 - i + 1] = aux;
}

arr[3] = arr[1];
arr[arr[3]] = arr[arr[2]];

console.log(arr);
