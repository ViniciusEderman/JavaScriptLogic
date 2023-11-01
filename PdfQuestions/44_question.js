/*
Escreva um algoritmo para ler 2 valores e se o segundo valor informado for ZERO, deve ser lido
um novo valor, ou seja, para o segundo valor não pode ser aceito o valor zero e imprimir o resultado
da divisão do primeiro valor lido pelo segundo valor lido.
*/

let value1, value2;
value1 = 50
value2 = 0;

let novoValor = 10;
let result;

if(value2 === 0) {
    value2 = novoValor;
    result = value1 / value2;
    console.log(result);
}
else {
    result = value1 / value2;
    console.log(result);
}

