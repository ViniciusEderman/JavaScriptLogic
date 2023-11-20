/*
 Escreva um algoritmo que permita a leitura das notas de uma turma de 20 alunos. Calcular a média
da turma e contar quantos alunos obtiveram nota acima desta média calculada. Escrever a média da
turma e o resultado da contagem.
*/

const notas = [];
const quantidade = 20;
let soma = 0;
let somaAprovados = 0;

for (let i = 0; i < 20; i++) {
  const numeroAleatorio = Math.floor(Math.random() * 10); 
  notas.push(numeroAleatorio);
}

console.log(notas);

for(let i = 0; i < notas.length; i++) {
    soma = soma + notas[i];

    if(notas[i] >= 6) {
        somaAprovados = somaAprovados + 1;
    }
}

console.log(`A media das notas é: `, soma / quantidade);
console.log("Quantidade de alunos aprovados: ", somaAprovados);
