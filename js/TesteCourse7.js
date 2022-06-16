class Car {
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
console.log(car);