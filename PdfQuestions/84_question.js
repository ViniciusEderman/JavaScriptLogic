/*
Faça um algoritmo para ler um valor N qualquer (que será o tamanho dos vetores). Após, ler dois
vetores A e B (de tamanho N cada um) e depois armazenar em um terceiro vetor Soma a soma dos
elementos do vetor A com os do vetor B (respeitando as mesmas posições) e escrever o vetor Soma.
*/

/*
Faça um algoritmo para ler 20 números e armazenar em um vetor. Após a leitura total dos 20
números, o algoritmo deve escrever esses 20 números lidos na ordem inversa. 
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function question(prompt) {
    return new Promise((resolve) => {
        rl.question(prompt, resolve);
    });
}

function somaVetores(vetor, secondVetor) {
    const result = vetor.map((num, index) => num + secondVetor[index]);
    console.log('Novo vetor com a soma: ', result);
}

async function preencherVetor() {
    const vet1 = [];
    const vet2 = [];

    async function preencherVetor1() {
        const numeros = await question('Digite os números para preencher o primeiro vetor e N para encerrar: ');
        if (numeros.toUpperCase() === 'N') {
            console.log('Primeiro vetor preenchido: ', vet1);
            preencherVetor2();
        } else {
            const numero = parseFloat(numeros);
            if (!isNaN(numero)) {
                vet1.push(numero);
            }
           await preencherVetor1();
        }
    }

    async function preencherVetor2() {
        const numeros2 = await question('Digite os números para preencher o segundo vetor e N para encerrar: ');
        if (numeros2.toUpperCase() === 'N') {
            rl.close();
            console.log('Segundo vetor preenchido: ', vet2);
            somaVetores(vet1, vet2);
        } else {
            const numero2 = parseFloat(numeros2);
            if (!isNaN(numero2)) {
                vet2.push(numero2);
            }
            await preencherVetor2();
        }
    }

    await preencherVetor1();
}

preencherVetor();
