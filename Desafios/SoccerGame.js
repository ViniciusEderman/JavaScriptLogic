function processGame(events) {
  // criamos um estado, no qual vamos modificar esse objeto atribuindo o nome da equipe e adicionando os dados
  const resultObject = {
    equipe1: {
      equipeName: "",
      id: [],
      action: {
        gol: 0,
        falta: 0,
        cartaoVermelho: 0,
        cartaoAmarelo: 0,
        golAnulado: 0,
      },
    },
    equipe2: {
      equipeName: "",
      id: [],
      action: {
        gol: 0,
        falta: 0,
        cartaoVermelho: 0,
        cartaoAmarelo: 0,
        golAnulado: 0,
      },
    },
  };

  // function que vão tratar a logica para cada ação(gol, falta...)
  const eventActions = {
    gol: (teamResult) => teamResult.action.gol++,
    falta: (teamResult) => teamResult.action.falta++,
    cartaoAmarelo: (teamResult) => teamResult.action.cartaoAmarelo++,
    cartaoVermelho: (teamResult) => teamResult.action.cartaoVermelho++,
    golAnulado: (teamResult) => {
      if (teamResult.action.gol > 0) {
        teamResult.action.gol--, teamResult.action.golAnulado++;
      }
    },
  };

  const teamsName = Object.keys(events);

  for (let i = 0; i < teamsName.length; i++) {
    const team = teamsName[i];
    const eventByTeam = events[team];

    for (let c = 0; c < eventByTeam.length; c++) {
      const { action, id } = eventByTeam[c];
      let teamResult;

      if (resultObject.equipe1.equipeName === "") {
        resultObject.equipe1.equipeName = team;
        teamResult = resultObject.equipe1;
      } else if (resultObject.equipe1.equipeName === team) {
        teamResult = resultObject.equipe1;
      } else if (resultObject.equipe2.equipeName === "") {
        resultObject.equipe2.equipeName = team;
        teamResult = resultObject.equipe2;
      } else if (resultObject.equipe2.equipeName === team) {
        teamResult = resultObject.equipe2;
      }

      if (!teamResult.id.includes(id)) {
        teamResult.id.push(id);
        eventActions[action](teamResult);
      }
    }
  }
  console.log(resultObject);
  return resultObject;
}

const mockData = {
  // 1 evento com os times e todas as actions, podemos usar objectKeys para acessar o 
  flamengo: [
    { action: "gol", id: "53230b2" }, // Gol do Flamengo
    { action: "falta", id: "68989648" }, // Falta do Flamengo
    { action: "cartaoAmarelo", id: "53230b3" }, // Cartão amarelo do Flamengo
    { action: "gol", id: "53230b4" }, // Outro gol do Flamengo
    { action: "cartaoVermelho", id: "53230b5" }, // Cartão vermelho do Flamengo
  ],
  vasco: [
    { action: "gol", id: "5151213C" }, // Gol do Vasco
    { action: "falta", id: "68989649" }, // Falta do Vasco
    { action: "cartaoAmarelo", id: "5151213D" }, // Cartão amarelo do Vasco
    { action: "cartaoAmarelo", id: "5151213D" }, // Outro cartão amarelo (não deve contar)
    { action: "gol", id: "5151213E" }, // Outro gol do Vasco
  ],
};

processGame(mockData);
