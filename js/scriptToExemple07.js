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
    if(lista.indexOf(Number(n)) != -1) {
        return true;
    }
    else {
        return false;
    }
}

function add() {

    if(Num(num.value) && !Lista(num.value, vector)) {

    }
    else {
        window.alert('Valor inválido ou já está na lista.');
    }
}