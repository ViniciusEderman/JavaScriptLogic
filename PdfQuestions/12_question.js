/* 
Escreva um algoritmo para ler uma temperatura em graus Fahrenheit, calcular e escrever o valor
correspondente em graus Celsius (baseado na fórmula abaixo):
 C F - 32
 ---------- = -----------
 5 9
Observação: Para testar se a sua resposta está correta saiba que 100oC = 212F
*/

// irei utilizar um function e irei mockar os dados:

// var fahrenheit;
// var celsius;

function tempCalc(fahrenheit, celsius) {
    celsius = ((fahrenheit - 32) / 9) * 5;
    celsius = parseInt(celsius);

    console.log(celsius);
}

tempCalc(325);
