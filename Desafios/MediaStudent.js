/* Recebendo uma lista de valores contendo o nome do aluno e um array de notas, calcule a média do aluno,
cada aluno terá 3 notas, sendo os valores positivos inteiros ou 0, os valores são de 0 a 10, 
retorne se o aluno passou considerando que a média é 7 
*/

function calcMediaByName(data) {
    const result = {};

    data.forEach(studant => {
        const name = Object.keys(studant)[0]
        const testeNotes = studant[name];

        let sum = 0;
        testeNotes.forEach(note => {
            // para cada aluno teremos a soma dentro do seu array
            sum = sum + note;
        });


        // pegamos a toma das notas e dividimos pelo tamanho do array(logica da média)
        const media = sum / testeNotes.length;

        // adicionamos no objeto vazio result, a chave sendo o none
        // e o valor será a media(somas das notas / tamanho(3))
        result[name] = media;
    });

    console.log(result)
}

const mockDatas = [
  { "Vinicius": [10, 7, 1] },
  { "Carlos Jose": [10, 6, 5] },
  { "Joao Cleber": [10, 8, 9] },
];

calcMediaByName(mockDatas);