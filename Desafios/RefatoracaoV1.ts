class Order {
  private orderItems: { name: string; price: number }[];
  private totalOrderPrice: number;

  constructor() {
    this.orderItems = [];
    this.totalOrderPrice = 0;
  }

  public addItemToOrderAndUpdatePrice(name: string, price: number) {
    this.orderItems.push({ name, price });
    this.updateTotalOrderPrice(price);
  }

  private updateTotalOrderPrice(price: number) {
    this.totalOrderPrice += price;
  }

  public printReceipt() {
    console.log("Pedido:");
    this.orderItems.forEach((item) => {
      console.log(`${item.name}: R$ ${item.price}`);
    });
    console.log(`Total: R$ ${this.totalOrderPrice}`);
  }
}

interface Payment {
  pay(): void;
}

class CreditPayment implements Payment {
  pay() {
    console.log("Pagamento realizado com cartão de crédito.");
  }
}

class CashPayment implements Payment {
  pay() {
    console.log("Pagamento realizado em dinheiro.");
  }
}

class PaymentFactory {
  static create(method: string): Payment {
    const payments: Record<string, Payment> = {
      credit: new CreditPayment(),
      cash: new CashPayment(),
    };

    if (!payments[method]) {
      throw new Error("Método de pagamento inválido.");
    }

    return payments[method];
  }
}


const order = new Order();
order.addItemToOrderAndUpdatePrice("Hamburguer", 25);
order.addItemToOrderAndUpdatePrice("Refrigerante", 5);
order.printReceipt();

try {
    const payment = PaymentFactory.create("credit");
    payment.pay();
  } catch (error) {
    console.error(error.message);
  }
