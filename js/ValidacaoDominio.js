
let validarDominio = /www. \w+\.com|com.br/;

console.log(validarDominio.test("Olá mundo"));

console.log(validarDominio.test("www.vinicius.com"));

console.log(validarDominio.test("www.vinicius.com.br"));

// Regex validação de email:
let validarEmail = /\w+@\w+\.\w+/;
console.log(validarEmail.test("viniciusederman@"));
console.log(validarEmail.test("viniciusedermanmc@hotmail.com"));
console.log(validarEmail.test("string"));