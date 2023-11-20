/*
Ler um vetor Q de 20 posições (aceitar somente números positivos). Escrever a seguir o valor do
menor elemento de Q e a respectiva posição que ele ocupa no vetor. 
*/

const q = []

for (let i = 0; i < 20; i++) {
    const numeroAleatorio = Math.floor(Math.random() * 100); 
    q.push(numeroAleatorio);
  }
  
console.log(q);

let menorValor = q[0];
let indice = 0;

for(let i = 0; i < q.length; i++) {
    if(q[i] < menorValor) {
        menorValor = q[i];
        indice = i;
    }
}
console.log('O menor valor é: ', menorValor);
console.log('O indice é:', indice);