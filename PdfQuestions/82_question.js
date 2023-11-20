/*
Ler um vetor A de 10 números. Após, ler mais um número e guardar em uma variável X.
Armazenar em um vetor M o resultado de cada elemento de A multiplicado pelo valor X. Logo após,
imprimir o vetor M
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function preencherVetor() {
    const vet = [];
    const vetorF = [];
    
    function promptNumero() {
        rl.question('Digite um número: ', (numero) => {
            vet.push(parseFloat(numero));
            if (vet.length < 10) {
                promptNumero();
            } else {
                rl.question('Agora, digite mais um número (X): ', (x) => {
                    const numeroX = parseFloat(x);

                    for (let i = 0; i < vet.length; i++) {
                        const calc = vet[i] * numeroX;
                        vetorF.push(calc);
                    }

                    console.log('Vetor final:', vetorF);
                    rl.close();
                });
            }
        });
    }
    promptNumero();
}

preencherVetor();
