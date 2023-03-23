// desafio: pegar a menor palavra

function menorPalavra(string) {
    
    const palavras = string.trim().split(" ") // separando a string e quebrando, exemplo: banana -> b a n a n a
    // o metodo trim remove possíveis espaços na palavra(evitando o erro de: "banana" => " banana")
    let menorPalavra = palavras[0];

    for(let i = 1; i < palavras.length; i++) {

        if(palavras[i].length < menorPalavra.length) {
            menorPalavra = palavras[i];
        }
    }
    return menorPalavra;
}

console.log(menorPalavra('banana dedo macaco pessoa lutar morrer vida amor paz'));
