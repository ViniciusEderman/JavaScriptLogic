function checarEntradaDados(num) {
    let number = Number(num);
    if(Number.isNaN(number)) {
        console.log(`Por favor utilize apenas números, você utilizou: ${number}`);
    }
    else{
        console.log(number);
        return number;
    }
}

checarEntradaDados(33);
//checarEntradaDados('TESTE');

//Exemplo usando o DOM do js:
let entrada = prompt("Digite um número: ");
checarEntradaDados(entrada); 

//Exceptions:
function teste(nome) {
    if(typeof nome != 'string') {
        throw new Error("Nome precisa ser uma string");
    }
    else {
        console.log(`Olá, tudo bem? O seu nom é: ${nome}`);
    }
}

teste("Vinicius Ederman");
teste(185);

