/*
A jornada de trabalho semanal de um funcionário é de 40 horas. O funcionário que trabalhar mais
de 40 horas receberá hora extra, cujo cálculo é o valor da hora regular com um acréscimo de 50%.
Escreva um algoritmo que leia o número de horas trabalhadas em um mês, o salário por hora e escreva
o salário total do funcionário, que deverá ser acrescido das horas extras, caso tenham sido trabalhadas
(considere que o mês possua 4 semanas exatas).

 ValorDaHora = 40;
 QuantasHorasTrabalhou = 43;
 ValorDoAdicional = ValorDaHora * 0,5;
 HorasQuePassam = (QuantasHorasTrabalhou - 40) * ValorDoAdicional;

 Se QuantasHorasTrabalhou > 40 
  faca ValorFinal = (40 * ValorDaHora) * HorasQuePassam;
  mostreNaTela ValorFinal

 Senao
  ValorFinal = QuantasHorasTrabalhou * ValorDaHora
*/

//com código:

const valorHora = 35.80;
let totalHorasTrabalhadas = 50;
let adicional = valorHora * 0.5;
let horasAmaisComAdiciona = (totalHorasTrabalhadas - 40) * adicional;

if(totalHorasTrabalhadas > 40) {
    const total = (40 * valorHora) + (horasAmaisComAdiciona);
    console.log(total);
}
else {
    console.log(totalHorasTrabalhadas * valorHora)
}
