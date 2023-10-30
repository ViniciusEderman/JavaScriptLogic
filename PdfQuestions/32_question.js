/*
Ler o nome de 2 times e o número de gols marcados na partida (para cada time). Escrever o nome
do vencedor. Caso não haja vencedor deverá ser impressa a palavra EMPATE.
*/

// Com L.N:
/*
nomeTime1 = flamengo
nomeTime2 = curitiba

golsFlamengo = 12gols
golsCuritiba = 7gols

se golsFlamengo > gols_Curitiba
 mostrar que o fla é melhor
se golsFlamengo = golsCuritiba
 mostrar Empate
senao
 mostrar que o curitiba é o melhor

*/

//CODIGO:
let golsFlamengo = 12
let golsCuritiba = 5

if(golsFlamengo > golsCuritiba) {
    console.log('FLA FLA O maior');
}
if(golsFlamengo == golsCuritiba) {
    console.log('Empate')
}
else {
    console.log('curitiba o maior');
}
