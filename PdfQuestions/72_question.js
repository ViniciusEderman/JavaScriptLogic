/*
Faça um algoritmo para ler o código e o preço de 15 produtos, calcular e escrever:
- o maior preço lido
- a média aritmética dos preços dos produtos
*/

const codigos = {
    codigos: ['0114514141', '0114314141', '1114514141', '0114514941', '0124514141'],
};

const valores = {
    '0114514141': 150.90,
    '0114314141': 10.90,
    '1114514141': 250.33,
    '0114514941': 299.99,
    '0124514141': 529.99,
};

let codigoMaisCaro;
let maiorValor = 0;

for(const codigo in valores) {
    const valor = valores[codigo];
    
    if(valor > maiorValor) {
        maiorValor = valor;
        codigoMaisCaro = codigo;
    }
}

console.log(`O código com o maior valor é: ${codigoMaisCaro}`);
console.log(`O maior valor é: ${maiorValor}`);
