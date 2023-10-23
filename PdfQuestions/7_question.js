/*
Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e escreva a idade
dessa pessoa expressa apenas em dias. Considerar ano com 365 dias e mês com 30 dias.
*/

function idade(anos, meses, dias) {
    //1 ano = 365 dias
    //1 mes = 30 dias
    //1 dia = 1dia

    anos = anos * 365;
    meses = meses * 30;
    dias = dias;

    console.log(anos + meses + dias);
}

idade(21, 7, 20);