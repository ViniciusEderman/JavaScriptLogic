class Car {
    constructor(marca, cor, gasolina, restoGasolina) {
        this.marca = marca;
        this.cor = cor;
        this.gasolina = gasolina;
        this.restoGasolina  = restoGasolina;
    }
}

let car = new Car("GOL", "Blue", false, 0);

console.log(car);