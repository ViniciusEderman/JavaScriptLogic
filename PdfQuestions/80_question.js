/*
Ler um vetor Q de 20 posições (aceitar somente números positivos). Escrever a seguir o valor do
maior elemento de Q e a respectiva posição que ele ocupa no vetor. 
*/

const q = []

for (let i = 0; i < 20; i++) {
    const numeroAleatorio = Math.floor(Math.random() * 100); 
    q.push(numeroAleatorio);
  }
  
console.log(q);
let maiorValor = q[0];
let indiceMaiorValor = 0;

for(let i = 0; i < q.length; i++) {
    if(q[i] > maiorValor) {
        maiorValor = q[i]
        indiceMaiorValor = i;
    }
}

console.log(maiorValor);
console.log(indiceMaiorValor)
