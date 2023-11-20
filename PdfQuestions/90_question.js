/*
Faça um algoritmo para ler um vetor de 30 números. Após isto, ler mais um número qualquer,
calcular e escrever quantas vezes esse número aparece no vetor. 
*/
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let array = [10, 10 ,10 , 50, 60, 32, 10 ,22, 55];

/*for (let i = 0; i < 30; i++) {
    const numeroAleatorio = Math.floor(Math.random() * 1000); // Altere 1000 para o intervalo desejado de números inteiros.
    array.push(numeroAleatorio);
} */

console.log(array);

rl.question('Digite mais um valor:', (newValue) => {
    array.push(Number(newValue));
    rl.close();
    console.log("Vetor final preenchido: ", array);

    let x = 0;
    let numberDigitado = Number(newValue);

    function calcularRepeticao() {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === numberDigitado) {
                x = (x + 1);
            }
        }
        console.log('Vezes que o número foi encontrado no array: ', x - 1);
        // estamos desconsiderando o próprio número na contabilização, por isso o -1;
    }
    calcularRepeticao();
});
