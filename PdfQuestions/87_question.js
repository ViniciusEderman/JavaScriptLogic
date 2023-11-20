/*
O mesmo exercício anterior, mas depois de ordenar os elementos do vetor em ordem crescente,
deve ser lido mais um número qualquer e inserir esse novo número na posição correta, ou seja,
mantendo a ordem crescente do vetor
*/

let vetor = [10, -5, 0, 1, 2, 3, 7, 8, 9, 10];

vetor.sort((a, b) => {
    return a - b;
})

console.log('Primeira ordenação: ', vetor);

vetor = [10, -5, 0, 1, 2, 3, 7, 8, 9, 10, -2];

vetor.sort((a, b) => {
    return a - b;
})

console.log('Ordenação final: ', vetor);
