/*
Uma fruteira está vendendo frutas com a seguinte tabela de preços:
Até 5 Kg Acima de 5 Kg
Morango R$ 2,50 por Kg R$ 2,20 por Kg
Maçã R$ 1,80 por Kg R$ 1,50 por Kg
Se o cliente comprar mais de 8 Kg em frutas ou o valor total da compra ultrapassar R$ 25,00, receberá
ainda um desconto de 10% sobre este total. Escreva um algoritmo para ler a quantidade (em Kg) de
morangos e a quantidade (em Kg) de maças adquiridas e escreva o valor a ser pago pelo cliente. 
*/

function x(tipo, kilos) {
    let value; 

    if(tipo === 'morango') {
        if(kilos > 5) {
            value = kilos * 2.20; 
        }
        if(kilos > 8) {
            value = (kilos * 2.20) * 0.90;
        }
        else {
            value = kilos * 2.50;
        }
        console.log(parseInt(value));
    }
    if(tipo === 'maça') {
        if(kilos > 5) {
            value = kilos * 1.50
        }
        if(kilos > 8) {
            value = (kilos * 1.50) * 0.90;
        }
        else {
            value = parseInt(kilos * 1.80);
        }
        console.log(parseInt(value));
    }
}

x('morango', 100)
