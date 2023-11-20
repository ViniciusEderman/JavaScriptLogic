/*
Faça um algoritmo para ler 10 números e armazenar em um vetor. Após isto, o algoritmo deve
ordenar os números no vetor em ordem crescente. Escrever o vetor ordenado. 

Armazene 10 numeros!
Agora percorra os numeros verique as posições e aloque os menores valores a frente!
Organize até que os valores estejam em ordem crescente!

 ln^^
 */

//em codigo:

const vetor = [10, -5, 0, 1, 2, 3, 7, 8, 9, 10];

vetor.sort((a, b) => {
    return a - b;
})

console.log('Vetor ordenado: ', vetor);
