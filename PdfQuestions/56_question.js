/*
Ler um valor inteiro (aceitar somente valores entre 1 e 10) e escrever a tabuada de 1 a 10 do valor
lido. 
*/

let valor = 5;

if(valor < 1 || valor > 10) {
    console.log('Apenas valores entre 1 e 10')
}
else {
    const arr = [1,2,3,4,5,6,7,8,9,10]

    for(let i = 0; i < arr.length; i++) {
        const calc = valor * arr[i]; 
        console.log(calc);
    }
}
