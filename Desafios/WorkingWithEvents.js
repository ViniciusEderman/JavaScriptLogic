function filterEvents(events) {
  const results = {};

  events.forEach((event) => {
    const { matchId, teamName, action, id } = event;

    if (!results[matchId]) {
      results[matchId] = {
        team1: {
          teamName: "",
          action: {
            gol: 0,
            falta: 0,
            golAnulado: 0,
            cartaoAmarelo: 0,
            cartaoVermelho: 0,
          },
        },
        team2: {
          teamName: "",
          action: {
            gol: 0,
            falta: 0,
            golAnulado: 0,
            cartaoAmarelo: 0,
            cartaoVermelho: 0,
          },
        },
      };
    }

    //validar se há um 3, 4time... para uma partida que so componhe 2 times
    //evitamos eventos de demais times
    if (results[matchId].team1.teamName && results[matchId].team2.teamName) {
      return;
    }

    // atribuir o objeto para o time e o nome
    if (
      results[matchId].team1.teamName === "" &&
      results[matchId].team2.teamName !== teamName
    ) {
      results[matchId].team1.teamName = teamName;
    } else if (
      results[matchId].team2.teamName === "" &&
      results[matchId].team1.teamName !== teamName
    ) {
      results[matchId].team2.teamName = teamName;
    }

    const actionsById =
      results[matchId].team1.action[id] || results[matchId].team2.action[id];

    if (!actionsById) {
      switch (action) {
        case "gol":
          if (results[matchId].team1.teamName === teamName) {
            results[matchId].team1.action.gol++;
          } else {
            results[matchId].team2.action.gol++;
          }
          break;
        case "falta":
          if (results[matchId].team1.teamName === teamName) {
            results[matchId].team1.action.falta++;
          } else {
            results[matchId].team2.action.falta ++; 
          }
          break;
        case "gol anulado":
          if (results[matchId].team1.teamName === teamName) {
            results[matchId].team1.action.golAnulado ++;
          } else {
            results[matchId].team2.action.golAnulado ++;
          }
          break;
        case "cartao amarelo":
          if (results[matchId].team1.teamName === teamName) {
            results[matchId].team1.action.cartaoAmarelo ++;
          } else {
            results[matchId].team2.action.cartaoAmarelo ++;
          }
          break;
        case "cartao vermelho":
          if (results[matchId].team1.teamName === teamName) {
            results[matchId].team1.action.cartaoVermelho ++;
          } else {
            results[matchId].team2.action.cartaoVermelho ++;
          }
          break;
      }
    }
  });

  console.log(results);
  return results;
}

const datas = [
  { matchId: 1, teamName: "Time A", action: "gol", id: 1 },
  { matchId: 1, teamName: "Time B", action: "gol", id: 2 },
  { matchId: 1, teamName: "Time A", action: "falta", id: 3 },
  { matchId: 1, teamName: "Time B", action: "falta", id: 4 },
  { matchId: 1, teamName: "Time A", action: "gol anulado", id: 1 }, // ID já usado
  { matchId: 1, teamName: "Time C", action: "gol", id: 5 }, // Evento inválido

  { matchId: 2, teamName: "Time D", action: "gol", id: 6 },
  { matchId: 2, teamName: "Time E", action: "falta", id: 7 },
  { matchId: 2, teamName: "Time E", action: "gol", id: 8 },
  { matchId: 2, teamName: "Time D", action: "gol", id: 6 }, // ID já usado
  { matchId: 2, teamName: "Time E", action: "gol anulado", id: 9 },

  { matchId: 3, teamName: "Time F", action: "gol", id: 10 },
  { matchId: 3, teamName: "Time G", action: "gol", id: 11 },
  { matchId: 3, teamName: "Time H", action: "falta", id: 12 },
  { matchId: 3, teamName: "Time F", action: "gol", id: 10 }, // ID já usado
  { matchId: 3, teamName: "Time G", action: "falta", id: 13 },
  { matchId: 3, teamName: "Time G", action: "gol", id: 14 },
  { matchId: 3, teamName: "Time I", action: "gol", id: 15 }, // Evento inválido

  { matchId: 4, teamName: "Time J", action: "falta", id: 16 },
  { matchId: 4, teamName: "Time K", action: "gol", id: 17 },
  { matchId: 4, teamName: "Time K", action: "gol", id: 17 }, // ID já usado
  { matchId: 4, teamName: "Time J", action: "gol anulado", id: 18 },
  { matchId: 4, teamName: "Time L", action: "gol", id: 19 }, // Evento inválido
  { matchId: 4, teamName: "Time J", action: "gol", id: 20 },
];

// passando os dados pro evento:
filterEvents(datas);
