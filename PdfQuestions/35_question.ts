/*
Um posto está vendendo combustíveis com a seguinte tabela de descontos: 

Álcool -> até 20 litros, desconto de 3% por litro 
acima de 20 litros, desconto de 5% por litro 
OBS: O valor do desconto é no valor total

Gasolina -> até 20 litros, desconto de 4% por litro 
acima de 20 litros, desconto de 6% por litro

Escreva um algoritmo que leia o número de litros vendidos e o tipo de combustível (codificado da
seguinte forma: A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo cliente sabendo-se
que o preço do litro da gasolina é R$ 3,30 e o preço do litro do álcool é R$ 2,90
*/

/*
Respondendo Com Ln: 
obs: com lN eu considerei apenas o desconto acima de 20 litros, abaixo não há desconto.

quantidadeLitros = x
tipoComb = A-alcool ou G-gasolina

gasolina = 3,30 
alcool = 2,90 
valorTotal = 0;

se for alcool e quantidadeLitros > 20 entao 
valorTotal = (alcool * quantidadeLitros) * 0,97
se for gasolina e quantidadeLitros > 20 entao 
valorTotal = (gasolina * quantidadeLitros) * 0,95
senao
 se for alcool, o valorTotal = alcool * quantidadeLitros
 se for gasolina, o valorTotal = gasolina * quantidadeLitros

*/

function calculoDesconto(tipo, litros) {

    let valorFinal;
    let valueGasolina = 3.30;
    let valueAlcool = 2.90;
 
    if(tipo === 'gasolina'){
        if(litros > 20){
            valorFinal = (litros * valueGasolina) * 0.94;
            console.log(valorFinal);
        }
        else {
          valorFinal = (litros * valueGasolina) * 0.96;
          console.log(valorFinal);
        }
    }
    if(tipo === 'alcool') {
        if(litros > 20){
            valorFinal = (litros * valueAlcool) * 0.95;
            console.log(valorFinal);
        }
        else{
            valorFinal = (litros * valueAlcool) * 0.97;
            console.log(valorFinal);
        }
    }
    else {
      console.log('Vc precisa escolher se é alcool ou gasolina')
    }
}

calculoDesconto('alcool', 50);
