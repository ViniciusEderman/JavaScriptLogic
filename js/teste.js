function teste(a, b) {
    this.a = a;
    this.b = b;

    let soma = a + b;
    console.log(soma);

    while(a < b) {
        soma = soma + 150;
        console.log(soma);
    }
}

teste();
