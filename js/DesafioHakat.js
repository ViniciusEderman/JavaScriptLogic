 /* 
 Implemente uma função que recebe 2 números como parâmetros e retorna um array, que retorna os números consecutivos ao 1° parâmetro até o valor em que, ao somar todos os números no array, temos o valor passado no 2 parâmetro.
 */

function returnArray(somaAtual, somaDesejada) {

    somaAtual = [];

    let soma = 0;

    if(somaAtual < somaDesejada) {
        for(let i = 0; i < somaAtual.length; i++) {
            soma = somaAtual[i];
        }
    } else {
        console.log('O seu segundo número é maior que o 1');
    }
}

console.log(returnArray(10, 20));
