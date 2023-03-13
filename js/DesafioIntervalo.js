/* Criar um algoritmo que leia um valor em parametro, e diga em qual intervalo esteja o valor digitado. 
1 intervalo entre 0 e 25,
2 intervalo entre 25 a 50
3 intervalo entre 50 a 75
4 intervalo entre 75 a 100
100+ ou qualquer valor diferente de dos acima deve constar uma msg  */

function verificarIntervalo(number) {

    if(number >= 0 && number <= 25) {
        console.log("O seu intervalo é de [0-25]");
    } 
    if(number > 25 && number <= 50) {
        console.log("O seu intervalo é de [25-50]");
    }
    if(number > 50 && number <= 75) {
        console.log("O seu intervalo é de [50-75]");
    }
    if(number > 75 && number <= 100) {
        console.log("O seu intervalo é de [75-100]");
    }
    else {
        console.log("Não entra em nenhum intervalo");
    }
}

verificarIntervalo(10);
