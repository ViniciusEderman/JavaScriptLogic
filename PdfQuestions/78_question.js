/*
 Escreva um algoritmo que permita a leitura dos nomes de 10 pessoas e armaze os nomes lidos em
um vetor. Após isto, o algoritmo deve permitir a leitura de mais 1 nome qualquer de pessoa e depois
escrever a mensagem ACHEI, se o nome estiver entre os 10 nomes lidos anteriormente (guardados no
vetor), ou NÃO ACHEI caso contrário. 
*/

const names = ['Vinicius', 'Carlos', 'José', 'Arthur', 'Natan', 'Eduardo', 'Julia', 'Gabriel', 'Mateus', 'Alberto'];
let nomeExistente = 'lkss';
let encontrado = false;

for(let i = 0; i < names.length; i++) {
    if(nomeExistente === names[i]) {
        console.log('Achei');
        encontrado = true;
        break;
    }
}

if (!encontrado) {
    console.log('Não achei');
}
