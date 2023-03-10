
// funções recursivas são aquelas que conseguem invocar a si mesmas, segue exemplo abaixo
// uma fuc recursiva tem sempre o base case => é uma forma de evitar que a função não pare de ser invocada;

function number(numero) {

    let fatorial = 1;

    for(let i = numero; i >= 1; i-- ) { // i = parametro(numero), i >= 1 numero e subtrair 1 até chegar 1
        fatorial *= i;
    }

    return fatorial;
}

//criando um desafio para questionar aos alunos oq ocorre na função abaixo:
const x = (number) => {
    if(number === 1) {
        return 1;
    } else {
        return number * x(number - 1); // number - 1 vai ser o fatorial de 4 = 4*3*2*1 = 24 * 5 = 120 
    }
}
 

console.log(x(5));
console.log(number(10));