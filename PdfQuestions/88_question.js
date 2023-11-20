/*
Faça um algoritmo para ler um vetor de 20 números. Após isto, deverá ser lido mais um número
qualquer e verificar se esse número existe no vetor ou não. Se existir, o algoritmo deve gerar um novo
vetor sem esse número. (Considere que não haverão números repetidos no vetor). 
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let array = [];

for (let i = 0; i < 20; i++) {
  const numeroAleatorio = Math.floor(Math.random() * 1000); // Altere 1000 para o intervalo desejado de números inteiros.
  array.push(numeroAleatorio);
}

console.log(array);

rl.question('Digite mais um valor:', (newValue) => {
    array.push(Number(newValue));
    rl.close();
    console.log("Vetor final preenchido: ", array);
});
