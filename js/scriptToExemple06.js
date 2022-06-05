function contar() {

    let inicio = window.document.getElementById('txtinicio');
    let fim = window.document.getElementById('txtfim');
    let passo = window.document.getElementById('txtpasso');
    let resultado = window.document.getElementById('resposta');

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        resultado.innerHTML = 'Impossível Contar!';
        window.alert('Faltam dados, revise antes de inserir algo!');
    }
    else {
        resultado.innerHTML = 'Contando... ';

        let i = Number(inicio.value);
        let f = Number(fim.value);
        let p = Number(passo.value);
        let c;

        if(i < f) {
            for(c = i; c <= f; c += p) {
                resultado.innerHTML += ` ${c} `;
            }
        }
        else {
            for(c = i; c >= f; c -= p) {
                resultado.innerHTML += ` ${c} `;
            }
        }
    }
}