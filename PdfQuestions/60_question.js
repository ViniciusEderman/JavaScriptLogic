/* 
Ler 10 valores e escrever quantos desses valores lidos estão no intervalo [10,20] (inlcuindo os
valores 10 e 20 no intervalo) e quantos deles estão fora deste intervalo.  
*/

let valores = [10, 20, 0, 100, 15, 16, 17, 21, 19, 18];
let intervaloValores = [];
let totalValores = 0;

for(let i = 0; i < valores.length; i++) {
    if((valores[i] >=10) && (valores[i] <= 20)) {
        intervaloValores.push(valores[i]);
        totalValores++;
    }
}

console.log(`Valores no intervalo 10 - 20: ${intervaloValores}`);
console.log(`Quantos valores estão no intervalo 10 - 20: ${totalValores}`);
