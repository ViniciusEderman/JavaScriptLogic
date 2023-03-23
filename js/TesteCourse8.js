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

// Usando Try/Catch:
// adicionando o finally 

try {
    let soma = "vinicius" - 5;
    console.log(soma);
}
catch(error) {
    console.log(error);
}
finally {
    console.log("Executando seu código..."); // vai ser executado mesmo se cair no catch(ou tbm no try)
}
// explicação do código acima: ele está subtraindo uma string e um number(logo isso se torna um error NaN). Então, o código caí no catch e printa este erro.
// explicando o finally(finalmente): executa algum trecho de código, mesmo tendo erro ou não!
