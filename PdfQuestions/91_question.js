/*
Faça um algoritmo para ler 50 números e armazenar em um vetor VET, verificar e escrever se
existem números repetidos no vetor VET e quantas vezes eles se repetem. 
*/

let array = [];

// preenchendo o array vazio com 50 numeros aleatório até 1000
for (let i = 0; i < 50; i++) {
    const numeroAleatorio = Math.floor(Math.random() * 1000); 
    array.push(numeroAleatorio);
} 
console.log(array);

let qntNumerosRepetidos = [];
let numerosUnicos = [];

//percorrendo o array 
for(let c = 0; c < array.length; c++) { 
    if(!numerosUnicos.includes(array[c])) {
        numerosUnicos.push(array[c]);
    }
    else if(!qntNumerosRepetidos.includes(array[c])) {
        qntNumerosRepetidos.push(array[c]);
    }
}

console.log('Quantidade de números iguais: ', qntNumerosRepetidos.length);
console.log('Números que se repetem: ', qntNumerosRepetidos);
