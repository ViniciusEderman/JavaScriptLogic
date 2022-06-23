
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

// Como remover um event:
function mensagem() {
    console.log("O usuário clicou");
}

btn.addEventListener("click", mensagem); // passando a function como event

setTimeout(function() {
    btn.removeEventListener("click", mensagem); // removendo o evento
},3000); // removendo o evento depois de 3segundos! 

// Default Event:
let defaultEvent = document.querySelector("#selecaoHtml");

defaultEvent.addEventListener("click", function(e) {
    e.preventDefault();
    console.log("Clicou mas não mudou o liknk");
}); /* O que está acontecendo neste código? 
estamos selecionando um elemento do html e depois criando um evento para click, porém temos a seguinte linha:
e.preventDefault(); 
O método cancela o evento se for cancelável, significando que a ação padrão que pertence ao evento não ocorrerá */
