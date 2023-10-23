
/*
Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês,
mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele
efetuadas. Escrever um algoritmo que leia o número de carros por ele vendidos, o valor total de suas
vendas, o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do
vendedor. 
*/

const salarioFixo = 1400; //salário mensal
const vendas = 4 //total de vendas realizadas 
const comissao = 300 //valor da comissao por venda
const valorVendas = 140000 // seria 4 vendas, dados que a soma total deu 140 mil
const porcentoVendas = valorVendas * 0.05; // valor obtido dos 5% do valor total vendido, no caso 140mil

const salarioFinal = salarioFixo + (vendas * comissao) + porcentoVendas;

console.log(salarioFinal);
