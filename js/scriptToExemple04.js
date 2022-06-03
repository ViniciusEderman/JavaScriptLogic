
function animations() {

    var msg = document.getElementById('msg');
    var img = document.getElementById('img');
    var data = new Date();
    var horaAtual = data.getHours();
    
    if(horaAtual >= 0 && horaAtual < 12) {
        img.src = 'imagemdeBomDia.jpg';
        msg.innerHTML = 'Bom dia';
    }
    else if(horaAtual >= 12 && horaAtual < 18) {
        document.body.style.background = 'rgb(167, 69, 31)';
        msg.innerHTML = 'Boa tarde';
    } 
    else {
        document.body.style.background = 'black';
        msg.innerHTML = 'Boa noite';
    }
}   

