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