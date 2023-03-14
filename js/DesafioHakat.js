
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
