/*
Faça um algoritmo para ler um número que é um código de usuário. Caso este código seja
diferente de um código armazenado internamente no algoritmo (igual a 1234) deve ser apresentada a
mensagem ‘Usuário inválido!’. Caso o Código seja correto, deve ser lido outro valor que é a senha. Se
esta senha estiver incorreta (a certa é 9999) deve ser mostrada a mensagem ‘senha incorreta’. Caso a
senha esteja correta, deve ser mostrada a mensagem ‘Acesso permitido’.
*/

const codigoArmazenado = 221335;
const senha = 123456789;
let codigoDigitado = 22135;

if(codigoDigitado != codigoArmazenado) {
    console.log("Usuário Inválido")
}
else {
   let senhaDigitada = 12345678

   if(senhaDigitada != senha) {
    console.log('Senha incorreta');
   }else {
    console.log('Acesso Permitido');
   }
}
