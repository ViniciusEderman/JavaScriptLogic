/*
Escreva um algoritmo para imprimir os números de 1 (inclusive) a 10 (inclusive) em ordem
decrescente.
*/

for(i = 50; i >= 1; i--) {
    if(i % 10 == 0) {
        console.log(i);
    }
}

/* LN:

Resposta:
i = 50
enquanto i >=1 percorrer e remover -1
se o resto da divisao de i por 10 = 0 -> mostrar o valor

*/