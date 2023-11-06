/*
 Escreva um algoritmo que calcule e imprima a tabuada do 8 (1 a 10). 
*/
const arr = [1,2,3,4,5,6,7,8,9,10]

for(let i = 0; i < arr.length; i++) {
    const calc = 8 * arr[i]; // ex: 8 * [0] = 1, resultado é 8*1 = 8, quando percorre novamente será 8 * 2 que seria a 2 posição
    console.log(calc);
}
