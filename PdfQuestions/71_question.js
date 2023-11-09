/*
Faça um algoritmo para ler uma quantidade e a seguir ler esta quantidade de números. Depois de
ler todos os números o algoritmo deve apresentar na tela o maior dos números lidos e a média dos
números lidos. 
*/

let quantidade = [10, 20, 30, 50, 70, 9];
let quantidadeTotal = 6;
let maiorValor = quantidade[0];
let media = 0;

for(let i = 0; i < quantidade.length; i++) {
    media = media + quantidade[i]
    if(quantidade[i] > maiorValor) {
        maiorValor = quantidade[i];
    }
}

const mediaFinal = media / quantidadeTotal;
console.log(maiorValor);
console.log(mediaFinal);
