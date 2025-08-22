/*
Receber um array de objetos no qual cada objeto representa uma ação de movimento bidimensional de um jogador
Receberá também um outro objeto com a posição inicial do jogador, retorne ao final da execução(programa) a posição final do jogador

Example INPUT:
teste({x: 5, y: 2}, ["cima", "cima", "esquerda", "baixo", "esquerda", "esquerda", "cima"])

Output:
{x = 2 e y = 4}
*/

function miniGame(initPosition, moviments) {
  for (let i = 0; i < moviments.length; i++) {
    if (moviments[i] === "cima") {
      initPosition.y++;
    } else if (moviments[i] === "baixo") {
      initPosition.y--;
    }
    else if (moviments[i] === "direita") {
        initPosition.x++;
    }
    else {
        initPosition.x--;
    }
  }

  console.log(initPosition);
}
 
miniGame({ x: 0, y: -1 }, [ 
  "cima",
  "cima",
  "esquerda", 
  "baixo",
  "esquerda",
  "esquerda", 
  "cima",
]);
