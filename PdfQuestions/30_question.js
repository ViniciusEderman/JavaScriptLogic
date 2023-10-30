/*
30) Ler 3 valores (considere que não serão informados valores iguais) e escrevê-los em ordem
crescente. 
*/

let value1, value2, value3;

value1 = 100
value2 = 10
value3 = 15

let arr = [value1, value2, value3];

arr.sort(function(a, b) {
    return a - b;
});

console.log(arr);
