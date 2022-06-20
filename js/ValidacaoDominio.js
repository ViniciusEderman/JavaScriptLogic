
let validarDominio = /www. \w+\.com|com.br/;
console.log(validarDominio.test("Olá mundo"));
console.log(validarDominio.test("www.vinicius.com"));
console.log(validarDominio.test("www.vinicius.com.br"));

// Regex validação de email:
let validarEmail = /\w+@\w+\.\w+/;
console.log(validarEmail.test("viniciusederman@"));
console.log(validarEmail.test("viniciusedermanmc@hotmail.com"));
console.log(validarEmail.test("string"));

let validarDataNasc = /[0-9]{2}[/][0-9]{2}[/][0-9]{4}/;
console.log(validarDataNasc.test("nome"));
console.log(validarDataNasc.test(192025));
console.log(validarDataNasc.test("123teste"));
console.log(validarDataNasc.test(18/04/1980)); // Por que não funciona?? Dúvida!