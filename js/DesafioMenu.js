var num = Math.floor(Math.random() * 101) + 5;
console.log(num);

function menu() {
    console.log("Digite seu numero para saber se é menor que 3");
}

if(num % 3 == 0 ) {
    console.log("O número é divisivíl por três");
} else {
    console.log("O número NÃO é divisivíl por três");
    menu();
}
