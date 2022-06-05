let num = document.getElementById('num'); 
let lista = document.getElementById('lista');
let resultado = document.getElementById('resultado');
let vector = [];

function Num(n) {

    if(Number(n) >= 1 && Number(n) <= 100) {
        return true;
    }
    else {
        return false;
    }
}

function Lista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true;
    }
    else {
        return false;
    }
}

function add() {

    if(Num(num.value) && !Lista(num.value, vector)) {
        vector.push(Number(num.value));

        let item = document.createElement('option');

        item.text = `Valor ${num.value} adicionado com sucesso`;

        lista.appendChild(item);

        resultado.innerHTML = '';
    }
    else {
        window.alert('Valor inválido ou já está na lista.');
    }
    num.value = '';
    num.focus();
}

function notFinish() {

    if(vector.length == 0) {
        window.alert('Adicione pelo menos 1 valor');
    }
    else {
        let total = vector.length;
        let maior = vector[0];
        let menor = vector[0];
        let soma  = 0;
        let media = 0;

        for(let i in vector) {
            soma += vector[i];

            if(vector[i] > maior) {
                maior = vector[i];
            }
            if(vector[i] < menor) {
                menor = vector[i];
            }
        }
        media += soma / total;

        resultado.innerHTML = '';
        resultado.innerHTML += `<p>No total temos: ${total} números já cadastrados</p>`;
        resultado.innerHTML += `<p>O maior valor é: ${maior}</p>`;
        resultado.innerHTML += `<p>O menor valor é: ${menor}</p>`;
        resultado.innerHTML += `<p>A soma de todos os valores é: ${soma}</p>`;
        resultado.innerHTML += `<p>A média de todos os valores é: ${media}</p>`;
    }
}
