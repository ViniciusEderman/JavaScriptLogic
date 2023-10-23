/*
As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia, e R$ 1,00 se forem
compradas pelo menos 12. Escreva um programa que leia o número de maçãs compradas, calcule e
escreva o custo total da compra. 
*/

function noName(macas) {
    let value;
    let valueTotal;

    if(macas >= 12) {
        value = 1;
        valueTotal = value * macas;
        console.log(valueTotal);
    }
    else{
        value = 1.30;
        valueTotal = value * macas;
        console.log(valueTotal);
    }
}

noName(7);
