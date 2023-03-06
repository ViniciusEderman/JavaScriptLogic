
setTimeout(() => {

}, 1000); // explicando a funcionalidade do setTimeout


function SendMail(messageCallback){
    setTimeout(() => {

        const tryError = false; 

        if(tryError){
            messageCallback("O Envio do e-mail falhou!");
        }else{
            messageCallback("Enviado com sucesso");
        }
    },2000)
}


console.log("Enviando o Email, aguarde...")

sendEmail("mensagem do email","victor@udemy.com", (time, error) => {
    if(error == undefined) { 
         // OK
        console.log("TUDO OK!");
        console.log(`Tempo: ${time}s`)
    }else{ // ocorre o error
        console.log("Ocorreu um erro: " + error)
    }
});
