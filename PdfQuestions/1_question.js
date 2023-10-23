/* 
Escreva um algoritmo que armazene o valor 10 em uma variável A e o valor 20 em uma variável B.
A seguir (utilizando apenas atribuições entre variáveis) troque os seus conteúdos fazendo com que o
valor que está em A passe para B e vice-versa. Ao final, escrever os valores que ficaram armazenados
nas variáveis 
*/

let A = 10;
let B = 20;
let temp;

//remover o comentário em bloco
/*
A = A + B; // 30
B = A - B; // 10
A = A - B; // 30 - 10 = 20 
console.log(`O valor atual de B é: ${B}`);
console.log(`O valor atual de A é: ${A}`);
*/

// Outra forma de fazer:

temp = A;
A = B; // 20
B = temp;

console.log(`O valor atual de B é: ${B}`);
console.log(`O valor atual de A é: ${A}`);
