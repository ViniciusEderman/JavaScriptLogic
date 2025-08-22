function soccerMatch(data) {
  const result = {
    equipe1: {
      gols: 0,
      faltas: 0,
      escanteio: 0,
      golsAnulados: 0,
    },
    equipe2: {
      gols: 0,
      faltas: 0,
      escanteio: 0,
      golsAnulados: 0,
    }
  }

  const eventsActions = {
    gol: (equipe) => result[equipe].gols++,
    falta: (equipe) => result[equipe].faltas++,
    escanteio: (equipe) => result[equipe].escanteio++,
    anulação: (equipe) => {
      if (result[equipe].gols > 0) {  
        result[equipe].gols--;
        result[equipe].golsAnulados++;
      }
    }
  }

  data.forEach(({ equipe, evento }) => {
    if (eventsActions[evento]) { 
      eventsActions[evento](equipe);
    }
    else {
      console.log("A chave não condiz");
    }
  });

  const finalResult = [
    { equipe: "equipe1", gols: result.equipe1.gols, faltas: result.equipe1.faltas, escanteios: result.equipe1.escanteio, anulacoes: result.equipe1.golsAnulados },
    { equipe: "equipe2", gols: result.equipe2.gols, faltas: result.equipe2.faltas, escanteios: result.equipe2.escanteio, anulacoes: result.equipe2.golsAnulados },
  ];

  console.log(finalResult)
  return finalResult;
}

soccerMatch([
  { equipe: "equipe1", evento: "gol" },
  { equipe: "equipe1", evento: "gol" },
  { equipe: "equipe1", evento: "falta" },
  { equipe: "equipe2", evento: "falta" },
  { equipe: "equipe1", evento: "escanteio" },
  { equipe: "equipe2", evento: "gol" },
  { equipe: "equipe2", evento: "escanteio" },
  { equipe: "equipe2", evento: "escanteio" },
  { equipe: "equipe2", evento: "gol" },
  { equipe: "equipe2", evento: "falta" },
  { equipe: "equipe2", evento: "anulação" },
  { equipe: "equipe1", evento: "gol" },
  { equipe: "equipe1", evento: "escanteio" },
  { equipe: "equipe1", evento: "falta" },
  { equipe: "equipe1", evento: "gol" },
]);