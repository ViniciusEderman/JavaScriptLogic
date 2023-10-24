/*
PERGUNTA:
Ler o salário fixo e o valor da venda efetuada pelo vendedor de uma empresa. Sabendo-se que
ele recebe uma comissão de 3% sobre o total das vendas até R$ 1.500,00 mais 5% sobre o que
ultrapassar este valor, calcular e escrever o seu salário total. 
*/

/*
RESPOSTA EM L.N:
ler salarioFixo
salarioFixo <- 1480
valorVenda = 1370
totalVenda = 12

se valorVenda <= 1500
  valorDoAdicional <- valorVenda - (valorVenda * 0,97)
  valorTotal = salarioFixo + valorDoAdicional
  mostrar valorTotal

senao 
  valorDoAdicional <- (valorVenda * 0,03 + (valorVenda - 1500) * 0,05) + salarioFixo
  mostrar valorTotal
*/


// Codigo:
const salarioFixo = 1480
let valorDaVenda = 1500
let comissao = 0;

if(valorDaVenda <= 1500) {
    comissao = (valorDaVenda * 0.03) + salarioFixo;
    console.log(comissao);
}
else {
    comissao = (1500 * 0.03 + (valorDaVenda - 1500) * 0.05) + salarioFixo;
    console.log(comissao);
}

// Fazendo a questão como se o vendendor realizou N vendas + seu salário fixo:
function SalarioTotal(salarioFixo, vendas) {
    let comissaoRecebida = 0;

    for(let i = 0; i < vendas.length; i++) {
        if(vendas[i] <= 1500) {
            comissaoRecebida += vendas[i] * 0.03;
        }
        else {
            comissaoRecebida += 1500 * 0.03 + (vendas[i] - 1500) * 0.05;
        }
    }

    const salarioTotal = salarioFixo + comissaoRecebida;
    return console.log(salarioTotal);
}

const vendas = [1900, 200, 1500, 9200]
SalarioTotal(1480, vendas);
