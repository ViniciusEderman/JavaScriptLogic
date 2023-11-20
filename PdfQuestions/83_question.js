/*
Faça um algoritmo para ler 20 números e armazenar em um vetor. Após a leitura total dos 20
números, o algoritmo deve escrever esses 20 números lidos na ordem inversa. 
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function preencherVetor() {
    const vet = [];

    function promptNumero() {
        rl.question('Digite um número: ', (numero) => {
            vet.push(parseFloat(numero));
            if (vet.length < 20) {
                promptNumero();
            } else {
                rl.close();
                console.log('Vetor: ', vet.reverse());
            }
        });
    }
    promptNumero();
}

preencherVetor();
