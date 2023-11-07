/*
Faça um algoritmo que calcule e escreva a média aritmética dos números inteiros entre 15
(inclusive) e 100 (inclusive). 
*/

//desconsiderando somar 15 e 100:
let soma = 0;
let mediaArit;
let quantidadeInteiros = 84;

for(let i = 16; i < 100; i++) {
    soma = soma + i;
    mediaArit = soma / quantidadeInteiros;
}

console.log(mediaArit.toFixed(2));
