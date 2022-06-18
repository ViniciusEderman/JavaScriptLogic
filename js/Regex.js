
const regex = /[15,22,15,23,50,22,50,90,100]/;

console.log(regex.test(15));
console.log(regex.test(2));

// maneira de testar o regex em intervalos:
const regexOne = /[0-15]/;
console.log(regex.test(2));

// utilizando caracters especiais:
const pontoRegex = /./;
// utilizando o operador "." {[é aceito espaçamento, letras, numeros e etc]}
console.log(pontoRegex.test("15151515 meu nome é Vinicius"));

// utilizando o caracter d no regex:
const regexD = /\d/; 
console.log(regexD.test(15));
// o /\d/ aceita o intervalo 0-9 em números

const regexDzao = /\D/; // este operador não aceita números, (só se os mesmos estiverem acompanhados de caracters)
console.log(regexDzao.test("olá, tudo bem?"));
console.log(regexDzao.test("#"));
console.log(regexDzao.test(1234567));

// Operador Not para Regexs:
let palavraSemAeV = /[^"av"]/;
console.log(palavraSemAeV.test("av"));
console.log(palavraSemAeV.test("sdfgjklzx"));