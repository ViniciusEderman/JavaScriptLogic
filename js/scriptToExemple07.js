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

        resultado.innerHTML = '';
        resultado.innerHTML += `<p>No total temos: ${total} números já cadastrados</p>`;
    }
}
