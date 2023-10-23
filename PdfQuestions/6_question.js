/*
Escreva um algoritmo para ler as dimensões de um retângulo (base e altura), calcular e escrever a
área do retângulo. 
*/
// área = A = b*h

let b;
let h;

//mockando os dados:
b = 50;
h = 25;
let a = b * h;
//console.log(a);


//outra forma de fazer:
function Calc(b, h) {
    const area = b * h;
    console.log(area);
}

Calc(50, 25);