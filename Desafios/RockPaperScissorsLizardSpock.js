function rpsls(pl1, pl2) { 
  // se os valores de pl1 e pl2 forem a mesma string, logo teremos empate
  if (pl1 === pl2) {
    return "Draw!";
  }

  // cada chave(jogada) tem suas respectivas falhas que os valores no arr
  // caso pl1 seja alguma chave e pl2 seja algum valor no arr, o pl2 ganha, caso contrário o pl1 ganha 
  const mapObject = {
    rock: ["paper", "spock"],
    lizard: ["scissors", "rock"],
    paper: ["scissors", "lizard"],
    scissors: ["spock", "rock"],
    spock: ["lizard", "paper"],
  };


 // acessamos o mapObject passando como chave a string de pl1
 // usamos incluve para checar se no array tem algum valor igual ao pl2
 // se tiver o pl2 ganha, caso n caimos na linha 24

  if (mapObject[pl1].includes(pl2)) {
    return "pl2 wins";
  }
  return "pl1 wins";
}

rpsls("paper", "rock");