/* 
 Faça um algoritmo que leia três notas de um aluno, calcule e escreva a média final deste aluno.
Considerar que a média é ponderada e que o peso das notas é 2, 3 e 5. Fórmula para o cálculo da média
final é:
 n1 * 2 + n2 * 3 + n3 * 5
 mediafinal = -----------------------------------
 10
*/

let nota1 = 0;
let nota2 =0;
let nota3 = 0;

nota1 = 10;
nota2 = 5;
nota3 = 7;

const calc = ((nota1 * 2) + (nota2 * 3) + (nota3 * 5)) / 10;

console.log(calc);

// outra forma de fazer:

const notas = {
    n1: 10,
    n2: 5,
    n3: 7,
};

const calculate = ((notas.n1 * 2) + (notas.n2 * 3) + (notas.n3 * 5)) / 10;
console.log(calculate);
