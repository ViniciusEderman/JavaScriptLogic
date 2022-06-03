function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var resultado = document.getElementById('res');

    if(fano.value.lenght == 0 || Number(fano.value) > ano) {
        window.alert("Verifique seus dados, e tente novamente! Há algo de errado");
    }
    else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = '';

        if(fsex[0].checked) {
            genero = 'Masculino';
        }
        else if(fsex[1].checked) {
            genero = 'Feminino';
        }
        resultado.innerHTML = `Idade calculada: ${idade} e de sexo ${genero}`;
    }
}