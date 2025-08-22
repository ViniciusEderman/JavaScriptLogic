// criação de classe -> classe produto com atributos nome, preço e desconto, utilizar construtor, desconto é opcional ou seja padrão 0, 


class Product {

    constructor(public name: string, public price: number, public discount: number = 0) {
        this.name = name;
        this.discount = discount;
        this.price = price - discount;
    }

    public getDetails(): string {
        return `Product: ${this.name}, Price: ${this.price}, Discount: ${this.discount}`;
    }

    public calcDiscount(): number {
       return this.price - this.discount;
    }
}


const objeto1 = new Product("Ps5 Slim", 3209);
objeto1.getDetails();
