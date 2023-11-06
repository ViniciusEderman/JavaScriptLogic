/*
Ler 10 valores e escrever quantos desses valores lidos são NEGATIVOS.
OBS: 
*/

let valores = [10, -5, 0, 15, 99, -9, 10, 88, 11, -39];
let negValue = [];
let totalNeg = 0;

for(i = 0; i < valores.length; i++) {
    if(valores[i] < 0) {
        negValue.push(valores[i]);
        totalNeg++;
    }
}

console.log(`Os valores menor que 0 são: ${negValue}`);
console.log(`O total de valores menor que 0 é: ${totalNeg}`);
