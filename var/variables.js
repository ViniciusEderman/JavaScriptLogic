// Neste arquivo, irei documentar o uso de variáveis do JS 

/* O que é são variáveis? 
  RESPOSTA: é um objeto capaz de reter e representar um valor ou expressão
*/

 /* Identificadores: 
  °Podem começar com($, letras ou _),
  °Não iniciar com números,
  °Não se pode usar espaçamento,
  °Não se pode usar palavras reservadas,
  OBS: CaseSensitive(A <> a) exemplo: CEU é diferente de ceu(variáveis diferentes)
 */

  let nome = "Teste";
  // nesta variável acima, estamos criando do tipo let(será explicado abaixo) que é uma String, recebendo a palavra Teste
  // Atribuindo outro valor para a mesma variável:
  nome = "Teste01";

  /* 
   Data types{ (typeof)
       number(infinity, NaN),
       string
       boolean
       null
       undefined
       object
       function
   }
  */

 //Usando TypeOF:
 function teste() {
    let teste = 3.50;
    typeof teste;
 }  