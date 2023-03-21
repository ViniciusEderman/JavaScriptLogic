
const array = [55, 20, 50, 150, 200, 155, 99, 2, 0, -56, 15, 33];

let maiorNumeroAte = array[0];
//console.log(maiorNumeroAte); // [0] = 55

if(array.length >= 0) {
    for(i = 1; i < array.length; i++) {
        if(array[i] > maiorNumeroAte) {
            maiorNumeroAte = array[i]; // posição i seria o maior valor passado por todo o array, utilizado pelo length
            //console.log(maiorNumeroAte);
        }  
    }
} 
else {
    console.log("Seu array não tem números para verificar");
}

console.log(maiorNumeroAte);
