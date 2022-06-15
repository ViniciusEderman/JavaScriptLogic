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
 class CarrinhoCompras {
    constructor(itens, quantidade, valorTotal) {
        this.itens = itens;
        this.quantidade = quantidade;
        this.valorTotal = valorTotal;
    }

    adicionarItem(item) {
        let contador = 0;

        this.adicionarItem = item;
            for(let itemCarrinho in this.itens) {
                if(this.itens[itemCarrinho].id == item.id) {
                    this.itens[itemCarrinho].quantidade += item.quantidade;
                    contador = 1;
                }
            }

            if(contador == 0) {
                this.itens.push(item);
            }

            this.quantidade += item.quantidade;
            this.valorTotal += item.preco * item.quantidade;
    }

    removerItem(item) {
        for(let itemCarrinho in this.itens) {
            if(this.itens[itemCarrinho].id == item.id) {
                let obj = this.itens[itemCarrinho];
                let index = this.itens.findIdex(function(obj) { return obj.id == item.id});

                this.itens.splice(index, 0);

                this.quantidade -= item.quantidade;
                this.valorTotal -= item.preco * item.quantidade;
            }
        }
    }
 }

 let carrinho = new CarrinhoCompras ([
    {
        id: 1,
        nome: "blusão",
        quantidade: 5,
        preco: 35.50,
    },
    {
        id: 02,
        nome: "Calça",
        quantidade: 2,
        preco: 50
    }
 ], 3, 277.50)
  
 console.log(carrinho);

 carrinho.adicionarItem({id: 01, nome: "CamisaTeste", quantidade: 3, preco: 22.50});
 console.log(carrinho);