/* class Bank {
    constructor(saldo) {
        this.saldo = saldo;
    };
    saque: function(saldo) {
        this.saldo = saldo - saque;
    }
} 
    Não consegui atribuir a function ao meu atributo(saque)
*/

// 2° tentativa:
 class Conta {
    constructor(saldo) {
        this.saldo = saldo;
    }

    deposito(valor){
        this.saldo += valor;
    }

    saque(valor){
        this.saldo -= valor;
    }
 }

 let conta = new Conta(1000);
 conta.deposito(2500);
 conta.saque(130);

 //console.log(conta);

 // Novo exercício:
 /* class CarrinhoCompras {
    constructor(itens) {
        this.itens = itens;
        this.itens = 1;
    }

    tipoItens(Titem) {
        this.tipoItem = Titem;
        tipoUm = 15.00;
        tipoDois = 15.98
        tipoTres = 2.75
        tipoQuatro = 25.00;
    }

    valor(valor) {
        valor = this.tipoItem * this.itens;
        this.valor = valor;
    }

 } */

 // Resolução correta do exercício acima ^ :
 