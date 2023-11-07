/*
O mesmo exercício anterior, mas agora não será informado o número de mercadorias em estoque.
Então o funcionamento deverá ser da seguinte forma: ler o valor da mercadoria e perguntar ‘MAIS
MERCADORIAS (S/N)?’.
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const valorMercadoria = 25;
let media;

rl.question('Diga quantos itens ha em estoque: ', (estoque) => {
    rl.question('Deseja incluior mais itens S ou N: ', (incluir) => {
        if(incluir === 'S') {
            rl.question('Insira a quantidade: ', (incluirEstoque) => {
              estoque = Number(estoque) + Number(incluirEstoque);
              console.log('Novo estoque é: ' + estoque);

              media = (estoque * valorMercadoria) / estoque;
              console.log('A média é: ' + media);

              rl.close();
            });
        }
        else if(incluir == 'N') {
            media = (estoque * valorMercadoria) / estoque;

            console.log('Estoque atual é: ' + estoque);
            console.log('A média é: ' + media);

            rl.close();
        }
        else{
            console.log('Erro no programa');
            rl.close();
        }
    });
});
