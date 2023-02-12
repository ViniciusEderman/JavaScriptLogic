
// criando um objeto

const name = "Vinicius";
let age = 20;
let estadoAtual = "Happy";


const Person = {
    name: name,
    age: age,
    estadoAtual: estadoAtual,
}


// criando outro objeto

const nameGame = "Lightbringer Isback";
let ageGame = 150;
let statusGame = "Online";

const userGame = { // usando json encurtado
    nameGame,
    ageGame,
    statusGame,
}

// usando o operador spread:
const rlUser = {
    ...name,
    ...age,
    ...estadoAtual,
    ...nameGame,
    ...ageGame,
    ...statusGame
}

//console.log(rlUser);


// destruct:

const testeDestruct = {
    teste: teste,
    teste01: teste01,
    teste02: teste02
}


// criando uma explicação, para usar o destruct, digamos que eu queira utilizar apenas o teste02 do objeto desctruct, eu vou usar a seguinte estrutura:
let { teste02} = testeDestruct; // <- criando uma variável, a partir de 1 item dentro do objeto outra forma de fazer seria usar -> let teste02 = testeDestruct.teste02;
