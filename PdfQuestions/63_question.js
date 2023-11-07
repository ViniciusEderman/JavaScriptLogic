/*
Escreva um algoritmo para ler 10 números e ao final da leitura escrever a soma total dos 10
números lidos. 
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let arr = [];
let count = 0;

function promptForNumber() {
    let somaTotal = 0;
    rl.question('Digite um número: ', (numero) => {
      arr.push(Number(numero));
      count++;
  
      if (count < 10) {
        promptForNumber();
      } else {
        console.log('Números digitados:', arr);
        for(let i = 0; i < arr.length; i++) {
            somaTotal = somaTotal + arr[i];
        }
        console.log("A soma de todos os números é: " + somaTotal);
      }
    });
  }

promptForNumber();
