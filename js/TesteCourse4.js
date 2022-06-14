//exerício 01
let computador = {
    processador: 1,
    placaDeVideo: 1,
    ram: 2,
}

computador.fonte = 'TermalTake';

console.log(computador);

// exercício 02
let arrayX = ["joao", "carlos", "maiza", "felipe", "luan"];
    if(arrayX[0] == 'vinicius') {
        console.log("Seu nome existe no meu array");
    }
    else{
        console.log("Não existe");
    }

// exercício 02 forma 0.2 de fazer
const arrayZ = ["Vinicius", "Carlos", "Maiza"] 
    if(arrayZ.includes("Vinicius")) {
        console.log("Seu nome existe no meu array");
    }
    else{
        console.log("Não existe");
    }

// includes em JS = "O método includes() determina se um conjunto de caracteres pode ser encontrado dentro de outra string, retornando true ou false"


// exercício 03 
let vector = [1,2,3,4,5,6];
let vect = ["name1", "name2", "name3"];

function verify(arr) {
    if(vector.length > 5) {
        console.log("Muitos elementos");
    }
    if(vect.length >= 5) {
        console.log("Muitos elementos");
    }
    else{
        console.log("Poucos elementos");
    }
}
verify();

// exercício 04
let String = "O meu nome é vinicius ederman e eu quero sair um pouco de casa";

var array = String.split(" ");

for(i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// exercício 05
const calculadora = {
    soma: function(a, b) {
        return a + b;
    },
    subtrair: function(a, b){
        return a - b;
    },
    multiplicar: function(a, b) {
        return a * b;
    },
    dividir: function(a, b) {
        return a / b;
    }
}
console.log(calculadora.soma(3,4));
console.log(calculadora.subtrair(3,4));
console.log(calculadora.multiplicar(3,4));
console.log(calculadora.dividir(3,4));