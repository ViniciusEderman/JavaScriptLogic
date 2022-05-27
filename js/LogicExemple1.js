/*Dado um número n, para cada inteiro i no intervalo de 1 a n, imprima um valor por linha da seguinte maneira:
Se i for múltiplo de 3 e 5, imprima:
FizzBuzz
Se i for um múltiplo de 3(mas não 5), imprima:
Fizz
Se i for um múltiplo de 5(mas não de 3), imprima BUZZ
Se i não for um múltiplo de 3 ou 5, imprima o valor de i */


function fizzBuzz(n) {
   for(i = 0; i < n; i++) {
    if ((i % 3 == 0) && (i % 5 == 5)) {
        console.log("FizzBuzz");
       }else if((i % 3 == 0) && (i % 5 != 0)){
           console.log(Fizz);
       }else {
           console.log(i);
       }
   }
}
