/*
 Ler 2 valores, calcular e escrever a soma dos inteiros existentes entre os 2 valores lidos (incluindo
os valores lidos na soma). Considere que o segundo valor lido será sempre maior que o primeiro valor
lido. 
*/

//mockando dados:
/*
const arr = [10, 25];
let soma = 0;

if(arr[0] > arr[1]) {
    console.log('O 1 valor precisa ser menor que o 2');
}
else{
    for( let i = arr[0]; i <= arr[1]; i++) {
        soma = soma + i;
    }
    console.log(soma);
}
*/

//usando a função de prompt:

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arr = [];
let count = 0;

function promptForNumber() {
  let somaTotal = 0;

  rl.question("Digite um número: ", (numero) => {
    arr.push(Number(numero));
    count++;

    if (count < 2) {
      promptForNumber();
    } else {
      while (arr[0] > arr[1]) {
        console.log("O 1 valor precisa ser menor que o 2");

        arr = [];
        count = 0;

        return promptForNumber();
      }

      for (let i = arr[0]; i <= arr[1]; i++) {
        somaTotal = somaTotal + i;
      }
      
      console.log(somaTotal);
      rl.close();
    }
  });
}

promptForNumber();
