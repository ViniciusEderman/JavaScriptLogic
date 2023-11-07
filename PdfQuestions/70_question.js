/*
Faça um programa que leia 100 valores e no final, escreva o maior e o menor valor lido. 
*/

//mockando dados: com Random

const array = [];

for (let i = 0; i < 100; i++) {
  const numeroAleatorio = Math.floor(Math.random() * 1000); // Altere 1000 para o intervalo desejado de números inteiros.
  array.push(numeroAleatorio);
}

console.log(array);

let menorValor = array[0];
let maiorValor = array[0];

for(let i = 1; i < array.length; i++) {
    if(array[i] < menorValor) {
        menorValor = array[i];
    }
    if(array[i] > maiorValor) {
        maiorValor = array[i];
    }
}
console.log(menorValor);
console.log(maiorValor);
