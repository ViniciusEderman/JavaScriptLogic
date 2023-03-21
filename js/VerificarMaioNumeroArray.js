
const array = [55, 20, 50, 150, 200, 155, 99, 2, 0, -56, 15, 33];

let maiorNumeroAte = array[0];

if(array.length >= 0) {
    for(i = 1; i < array.length; i++) {
        if(array[i] > maiorNumeroAte) {
            maiorNumeroAte = array[i]; // posição i seria o maior valor passado por todo o array, utilizado pelo length
        }  
    }
} 
else {
    console.log("Seu array não tem números para verificar");
}

//console.log(maiorNumeroAte);

// fazendo a mesma questão usando o operador math.max:

const max = Math.max.apply(null, array); // << usando o metódo math.max e passando o array como parâmetro ele verifica o maior nm
console.log(max);
