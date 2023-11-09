/*
Escreva um algoritmo que imprima as seguintes seqüências de números: (1, 1 2 3 4 5 6 7 8 9 10)
(2, 1 2 3 4 5 6 7 8 9 10) (3, 1 2 3 4 5 6 7 8 9 10) (4, 1 2 3 4 5 6 7 8 9 10) e assim sucessivamente, até
que o primeiro número (antes da vírgula), também chegue a 10. 
*/

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let i = 0; i < arr.length; i++) {
    console.log(`sequencia de: ${i + 1}, numeros: ${arr}`);
}
