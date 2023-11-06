/*
Ler 10 valores, calcular e escrever a média aritmética desses valores lidos
*/

let valores = [0, 1, 22, 100, 15, -100, 17, 21, 0, 18];
let valorF = 0;

for(let i=0; i < valores.length; i++) {
    valorF = valorF + valores[i];
    
}

console.log("A média é: " + (valorF / 10));
