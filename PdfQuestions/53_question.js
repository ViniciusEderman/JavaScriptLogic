/*
Ler um valor N e imprimir todos os valores inteiros entre 1 (inclusive) e N (inclusive). Considere
que o N será sempre maior que ZERO. 
*/

let n = -5;

if(n <= 0) {
    console.log('N não pode ser igual a 0 ou menor que 0');
}
else {
    for(let i = 1; i <= n; i++) {
    
        console.log(i);
    }
}
