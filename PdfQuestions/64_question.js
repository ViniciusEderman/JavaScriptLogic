/*
Escreva um algoritmo para ler 10 números. Todos os números lidos com valor inferior a 40 devem
ser somados. Escreva o valor final da soma efetuada
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
            if(arr[i] < 40) {
              somaTotal = somaTotal + arr[i];
            }
            rl.close();
        }
        console.log("A soma de todos os números menores que 40 é: " + somaTotal);
      }
    });
  }

promptForNumber();
