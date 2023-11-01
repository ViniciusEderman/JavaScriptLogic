/*
Escreva um algoritmo para ler as notas da 1a. e 2a. avaliações de um aluno, calcule e imprima a
média (simples) desse aluno. Só devem ser aceitos valores válidos durante a leitura (0 a 10) para cada
nota.
*/

let a1 = -5;
let a2 = 7;

while(true) {
    if((a1 >= 0 && a1 <=10) && (a2 >= 0 && a2 <=10)){
        let valorF = 0;
        valorF = (a1 + a2) / 2;
        console.log(valorF);
        break;
    }
    
    else {
        console.log('Digite os valores de a1 e a2 somente entre 0 e 10');
        break;
    }

    console.log('Digite sim para refazer o calculo ou não para sair')
    let newCalc;

    if(newCalc === 'Sim') {
        console.log('Digite a1 e a2 novamente');
    }

    if (newCalc === 'Não'){
        console.log('Exist 0');
    }
}
