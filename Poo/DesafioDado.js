class Dado {

    constructor(faces) {
        this.faces = faces;
    }

    Rolar() {
        console.log('Resultado: ' + this.GerarNumeroAleatorio(1, this.faces)); // exemplo, faces = 6, vai ser gerado um num entre 1 e 6
        // 1 = min, faces = max
    }

    GerarNumeroAleatorio(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);

        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

//criando os dados:

const testeOne = new Dado(12);
const testeTwo = new Dado(6);
testeOne.Rolar();
testeTwo.Rolar();
