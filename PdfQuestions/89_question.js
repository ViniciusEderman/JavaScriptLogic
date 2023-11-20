/*
Faça um algoritmo para ler dois vetores V1 e V2 de 10 números cada. Calcular e escrever a
quantidade de vezes que V1 e V2 possuem os mesmos números e nas mesmas posições. 
*/

const vetor1 = [10, 25, 33, 23, -5, 0, 2, 3, 4, 6];
const vetor2 = [33, 22, 25, 30, -5, 0, 2, 6, 4, 10];
let valoresIguais = 0;
let indiceIguais = [];

for(let i = 0; i < vetor1.length; i++){
    for(let c = 0; c < vetor2.length; c++) {
        if(vetor1[i] === vetor2[c] && i === c ) {
            valoresIguais++;
            indiceIguais.push(i);
        }
    }
}

console.log('Valores iguais:', valoresIguais);
console.log('Posições dos indices iguais: ', String(indiceIguais));
