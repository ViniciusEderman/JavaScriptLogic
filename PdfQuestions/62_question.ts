/*
Ler o número de alunos existentes em uma turma e, após isto, ler as notas destes alunos, calcular e
escrever a média aritmética dessas notas lidas.
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o número de alunos: ', (numeroAlunos) => { 
    rl.question('Nota dos alunos ', (notas) => {
        const valorRetornado = notas.split(', ');  
        let soma = 0;

        for(let i = 0; i < valorRetornado.length; i++) {
            const x = Number(valorRetornado[i]);
            soma = soma + x;
        }

        const media = (soma / Number(numeroAlunos));
        console.log(media);
    });
});
