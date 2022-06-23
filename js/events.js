
let botao = window.document.querySelector("#botao");
 // Estou apenas pegando algum elemento no html e selecionando ele para o js

botao.addEventListener("click", function() {
    console.log("Usuário clicou");
});
 /* Neste ponto eu estou atribuinto ao botao -> um evento(do tipo click);
  Sendo assim printado que o usuário clicou */

// Criando outro evento com arrow function:
let btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
    console.log("O usuário clicou aqui!");
});
