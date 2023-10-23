/*
Escreva um algoritmo para ler o número total de eleitores de um município, o número de votos
brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total
de eleitores.
*/

function CalcVotacao(tEleitores, brancos, nulos, validos) {
    const votos = brancos + nulos + validos;

    if(votos > tEleitores) {
        console.log('Há mais votos que eleitores');
    }else {
        brancos = brancos * 100 / tEleitores;
        nulos = nulos * 100 / tEleitores;
        validos = validos * 100 / tEleitores;
        console.log(`Percentual de votos brancos: ${brancos}%, nulos: ${nulos}%, validos: ${validos}%`)
    }
}

CalcVotacao(500, 200, 100, 200)
