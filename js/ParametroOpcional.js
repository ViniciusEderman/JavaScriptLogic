 
function Teste(a, b, inverter = false) { // caso o inverter esteja como true, ele sempre vai inverter a ordem para b - a

    if(inverter) {
        console.log(b - a);  // exemplo de teste a = 2 e b = 10
    } else{
        console.log(a - b); 
    }
}

/* Caso seja subtraido 2 - 10 = -8  basta passar o parametro inverter, 
no qual irá invertar o valor para b - a ficando = 10 - 2 = +8 */