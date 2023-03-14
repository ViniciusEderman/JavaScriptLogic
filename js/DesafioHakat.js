 /* 
 Implemente uma função que recebe 2 números como parâmetros e retorna um array, que retorna os números consecutivos ao 1° parâmetro até o valor em que, ao somar todos os números no array, temos o valor passado no 2 parâmetro.
 */

function returnArray(firstNumber, secondNumber) {

    firstNumber = [];

    let soma = 0;


    if(firstNumber < secondNumber) {
        for(i = 0; i < firstNumber.length; i++) {
            soma = firstNumber + 1;
        }
    } else {
        console.log('O seu segundo número é maior que o 1');
    }
}

console.log(returnArray(10, 20));
