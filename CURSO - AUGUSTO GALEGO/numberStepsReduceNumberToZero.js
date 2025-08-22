// MANEIRA SIMPLES 
var numberOfSteps = function(num) {
    let steps = 0;

    while(num > 0) {
        if(num % 2 === 0) {
            num = num / 2;
            steps++
        }
        else {
            num = num - 1;
            steps++
        }
    }

    return steps;
};

console.log(numberOfSteps(8));

// FORMA MAIS COMPLEXA COM USO DE OPERADORES BINÁRIOS:
var numberOfSteps1 = function(num) {
    let steps = 0;

    while(num > 0) {
        if(num & 1) {
            num--;
            steps++
        }
        else {
            num>>=1;
            steps++
        }
    }

    return steps;
};

console.log(numberOfSteps1(8));
