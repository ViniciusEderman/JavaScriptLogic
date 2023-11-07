
const arr = ['104101010'];

const pessoa = {
    name: "josé",
    idade: 80,
    endereco: {
        rua: 'teste',
        bairro: 'boa viagem',
        numero: 100,
    },
    telefones: arr,
}

console.log(pessoa);

const pessoa2 = {}
Object.assign(pessoa2, pessoa);
pessoa2.name = 'vinicius';
pessoa2.endereco.bairro = 'zz';
pessoa2.telefones.push('5151551');
console.log(pessoa2);
