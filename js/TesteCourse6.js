class Endereco {
    constructor(rua, numero, bairro, cidade, estado) {
        this.rua = rua;
        this.numero = numero
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }
    set novaRua(novaRua) {
        this.rua = novaRua;
    }
    set novoNumero(newNumber) {
        this.numero = newNumber;
    }
    set novoBairro(newBairro) {
        this.bairro = newBairro;
    }
    set novaCidade(newCity) {
        this.cidade = newCity;
    }
    set novoEstado(newEstado) {
        this.estado = newEstado;
    }
}

let endereco = new Endereco("Rua Jornalista Alfredo Porto Silveira", "312", "Boa viagem", "Recife", "Pernambuco");

console.log(endereco);

endereco.novaRua = "Rua Duarte Pacheco";
endereco.novoNumero = 273;
endereco.novoBairro = "São Miguel";
endereco.novaCidade = "Arcoverde";~

console.log(endereco);
