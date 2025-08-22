/* 
Exercício:

Implemente uma pilha(crie uma classe) com vários métodos

o 1 método deve adicionar novos itens a pilha 
exemplo se voce inserir 1, 2, 3 o resultado será 3,2,1 porque o 1° seria o primeiro a entrar e o ultimo a sair

um segundo metodo que remove o ultimo item da pilha, ou seja o ultimo elemento que entrou, lembrando que pilha o 1° é o último a sair

um terceiro método que verifica se a pilha está apenas vázia

quarto metodo limpa por completo a pilha

quinto informa o tamanho por completo da pilha ou seja o comprimento da pilha, quantos elementos tem ali dentro

sexto metodo vai imprimir a pilha
*/

class Stack {

    constructor() {
        this.element = [];
    }

    inputNewElement(element) {
        this.element.push(element)
    }

    removeStackItem() {
        this.element.pop();
    }

    stackEmpty() {
        if(this.element.length === 0) {
            console.log(`the stack is empty`)
            return `the stack is empty`
        } else {
            console.log('the stack is not empty')
            return 'the stack is not empty';
        }
    }

    clearAllStack() {
        this.element = [];

        console.log(this.element);

        return this.element;
    }

    lengthStack() {
        console.log(this.element.length);
        return this.element.length;
    }

    consoleStack() {
        const arr = [];

        for (let i = 0; i < this.element.length; i++) {
            arr.push(this.element[i]);
        }
        console.log(arr);
        return arr;
    }
}

const stack = new Stack();

stack.inputNewElement(15)
stack.inputNewElement(12)
stack.inputNewElement(13)
stack.inputNewElement(112)

stack.stackEmpty();

//stack.consoleStack();
stack.removeStackItem();
//stack.consoleStack();

//stack.clearAllStack()
stack.lengthStack()
stack.consoleStack();