/*class Car {
    constructor(marca, cor, gasolinaTotal, consumo) {
        this.marca = marca;
        this.cor = cor;
        this.gasolinaTotal = gasolinaTotal;
        this.consumo  = consumo;
    }
    dirigir(km) {
        let consumoLitro = km / this.consumo;
        this.gasolinaTotal = this.gasolinaTotal - consumoLitro;
    }
    abastecer(litro) {
        this.gasolinaTotal = this.gasolinaTotal + litro;
    }
}

let car = new Car("GOL", "Blue", 100, 14);
console.log(car);

console.log("---------------------------");

car.dirigir(100);
console.log(car);

console.log("---------------------------");

car.abastecer(4);
console.log(car); */

// Novo exercício:
class Conta {
    constructor(saldoContaC, saldoContaP, juros) {
        this.saldoContaC = saldoContaC;
        this.saldoContaP = saldoContaP;
        this.juros = juros;
    }
    depositar(valor) {
        this.saldoContaC = this.saldoContaC + valor;
    }
    saque(valor) {
        this.saldoContaC = this.saldoContaC - valor;
    }
    transfereciaCParaP(valor) {
        this.saldoContaC -= valor;
        this.saldoContaP += valor;
    }
    transfereciaPParaC(valor) {
        this.saldoContaP -= valor;
        this.saldoContaC += valor;
    }
    aplicarJuros(juros) {
        this.juros = juros;
        let valorJuros = (this.saldoContaC * juros) / 100;
        this.saldoContaC = this.saldoContaC - valorJuros;
    }
}

class ContaEspecial extends Conta {
    constructor(saldoContaC, saldoContaP, juros) {
        super(saldoContaC, saldoContaP, juros * 2) 
    }
}

let conta = new Conta(695.80, 2000.00, 0);
console.log(conta);

conta.depositar(200);
console.log(conta);

conta.saque(100);
console.log(conta);

conta.transfereciaCParaP(100);
console.log(conta);

conta.transfereciaPParaC(1000);
console.log(conta);

conta.aplicarJuros(2.5);
console.log(conta);
