
let validarDominio = /www. \w+\.com|com.br/;
console.log(validarDominio.test("Olá mundo"));
console.log(validarDominio.test("www.vinicius.com"));
console.log(validarDominio.test("www.vinicius.com.br"));

// Regex validação de email:
let validarEmail = /\w+@\w+\.\w+/;
console.log(validarEmail.test("viniciusederman@"));
console.log(validarEmail.test("viniciusedermanmc@hotmail.com"));
console.log(validarEmail.test("string"));

let validarDataNasc = /[0-31]{2}[/][0-12]{2}[/][1950-2022]{4}/;
console.log(validarDataNasc.test("nome"));
console.log(validarDataNasc.test(192025));
console.log(validarDataNasc.test("123teste"));
console.log(validarDataNasc.test(18/04/1980)); // Por que não funciona?? Dúvida!

//Exercício{criar regex apenas para letras AA}:
let letraCaps = /[A-Z]/;
console.log(letraCaps.test("a"));
console.log(letraCaps.test("AAAAA"));
console.log(letraCaps.test("ZkAb"));
console.log(letraCaps.test(1980));

//Exercício{criar regex para validar marcas}:
let validarMarcas = /Marca: (Nike|Adidas|Puma|Klering)/;
console.log(validarMarcas.test("Marca: Nike"));
console.log(validarMarcas.test("marca: Nike"));
console.log(validarMarcas.test("Nike"));
console.log(validarMarcas.test("Marca: qualquerUma"));