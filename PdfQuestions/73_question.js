/*
A prefeitura de uma cidade deseja fazer uma pesquisa entre seus habitantes. Faça um algoritmos
para coletar dados sobre o salário e número de filhos de cada habitante e após as leituras, escrever:
a) Média de salário da população
b) Média do número de filhos
c) Maior salário dos habitantes
d) Percentual de pessoas com salário menor que R$ 150,00
Obs.: O final da leituras dos dados se dará com a entrada de um “salário negativo”
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let somaSalario = 0;
let somaFilhos = 0;

const coletarSalarios = () => {
    const salarios = [];
    
    let minimoDigitado = 0;

    const coletarProximoSalario = () => {
        if (minimoDigitado < 5) {
            rl.question(`Qual o valor do salário: `, (salario) => {
                salarios.push(parseFloat(salario));
                minimoDigitado++;
                coletarProximoSalario();
            });
        } else {
            coletarFilhos(salarios);
        }
    };
    coletarProximoSalario();
};

const coletarFilhos = (salarios) => {
    const filhos = [];
    let maiorSalario = salarios[0];
    let minimoDigitado = 0;

    const coletarProximoFilho = () => {
        if (minimoDigitado < 5) {
            rl.question(`Quantos filhos você tem filho: `, (qtdFilhos) => {
                filhos.push(parseInt(qtdFilhos));
                minimoDigitado++;
                coletarProximoFilho();
            });
        } else {
            rl.close();
            let maiorQuantidadeFilhos = filhos[0];
            
            for(let i = 0; i < salarios.length; i++) {
                somaSalario = somaSalario + salarios[i];

                if(maiorSalario < salarios[i]) {
                    maiorSalario = salarios[i];
                }

            }
            for(let i = 0; i < filhos.length; i++) {
                somaFilhos = somaFilhos + filhos[i];

                if(maiorQuantidadeFilhos < filhos[i]) {
                    maiorQuantidadeFilhos = filhos[i];
                }

            }
            console.log('Media de salario:', somaSalario / 5);
            console.log('Média de filhos', somaFilhos / 5);
            console.log('Maior quantidade de filhos digitados: ', maiorQuantidadeFilhos);
            console.log('Maior salário digitado: ', maiorSalario);
        }
    };
    coletarProximoFilho();
};

coletarSalarios();
