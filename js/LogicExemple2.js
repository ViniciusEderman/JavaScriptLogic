/* Implemente um programa que recebe 20 números inteiros positivos e os armazena em um vetor A. 
Em seguida o programa deve separar os números pares e ímpares em dois vetores. Os números pares e ímpares devem ser armazenados nos seus respectivos vetores. */

var Vetor = []; //declarando o vetor que vai receber os 20 números inteiros

for(i = 0; i < 20; c++){ // neste laço for, é iniciado um contador com valor 0, enquanto ele estiver < que 20 ele irá somar+1
    Vetor[i] = parseInt(prompt("Digite um número: ")) // e o vetor da posição do número que entrou(i) recebe um parseInt(prompt) (?? explicar melhor)
} 

var impar = []; //declaração do vetor impar
var par = []; //declaração do vetor par
var j = 0, k = 0; // dois novos contadores 

for(i = 0; i < 20; i++){
    if(Vetor[i] % 2 == 0) {
        par[j] = Vetor[i]; 
        j++;
    }
    else{
        impar[k] = Vetor[i];
        k++;
    }
}

alert("\nPares: " + par);
alert("Ímpares: " + impar);
