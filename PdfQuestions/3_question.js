/*
3) Os pares de instruções abaixo produzem o mesmo resultado?
A (4/2)+(2/4) e A 4/2+2/4
B 4/(2+2)/4 e B 4/2+2/4
C (4+2)*2-4 e C 4+2*2-4 
*/

let a = (4/2) + (2/4); // 2 + 0,5 = 2,5
let A = 4/2 + 2/4; // 2 + 0,5 = 2,5

let b = 4/(2+2)/4; // 4/4 = 1/4 = 0,25
let B = 4/2+2/4; // 2 + 0,5 = 2,5

let c = (4+2)* 2-4; // 4+2 =6 *2 = 12 - 4 = 8 
let C = 4+2*2-4; // 2 *2 = 4 + 4 = 8 - 4 = 4

console.log(a, A);
console.log(b, B);
console.log(c, C);
