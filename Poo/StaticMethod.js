
// NORMAL METHOD:

/*class Calculator {

    sum(a, b) {
        console.log(a + b);
    }

    sub(a, b) {
        console.log(a - b);
    }
}*/

// if a need to use this method? 

/*const sum1 = new Calculator;

sum1.sum(12, 15)
console.log(sum); */

// I need to creat a object for use the method sum, now I will use the static method

class Calculator {

    static sum(a, b) {
        console.log(a + b);
    }

    static sub(a, b) {
        console.log(a - b);
    }
}

Calculator.sum(10, 10);

