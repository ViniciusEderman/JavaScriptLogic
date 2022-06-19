
let validarDominio = /www. \w+\.com|com.br/;

console.log(validarDominio.test("Olá mundo"));

console.log(validarDominio.test("www.vinicius.com"));

console.log(validarDominio.test("www.vinicius.com.br"));

