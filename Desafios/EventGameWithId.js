function soccerMatchResult(events) {
  const result = {
    Equipe1: {
      equipeName: "",
      action: {
        gol: 0,
        falta: 0,
        golsAnulados: 0,
        escanteio: 0,
        impedimento: 0,
      },
      id: [],
    },
    Equipe2: {
      equipeName: "",
      action: {
        gol: 0,
        falta: 0,
        golsAnulados: 0,
        escanteio: 0,
        impedimento: 0,
      },
      id: [],
    },
  };

  const actionEvents = {
    gol: (team) => team.action.gol++,
    golAnulado: (team) => {
      if (team.action.gol > 0) {
        team.action.gol--, team.action.golsAnulados++;
      }
    },
    falta: (team) => team.action.falta++,
    escanteio: (team) => team.action.escanteio++,
    impedimento: (team) => team.action.impedimento++,
  };

  events.forEach(({ equipeName, action, id }) => {
    let team;

    if (result.Equipe1.equipeName === "") {
      result.Equipe1.equipeName = equipeName;
      team = result.Equipe1;
    } else if (result.Equipe1.equipeName === equipeName) {
      team = result.Equipe1;
    } else if (result.Equipe2.equipeName === "") {
      result.Equipe2.equipeName = equipeName;
      team = result.Equipe2;
    } else if (result.Equipe2.equipeName === equipeName) {
      team = result.Equipe2;
    }

    if (team.id.includes(id)) {
        return;
    }

    team.id.push(id);

    if (actionEvents[action]) {
      actionEvents[action](team);
    }

  });

  console.log(result);
  return result;
}

const falseDatas = [
  { equipeName: "flamengo", action: "gol", id: "53230b2" }, // FLAMENGO FAZ 1 GOL ID UNICO
  { equipeName: "vasco", action: "gol", id: "5151213C" }, // VASCO FAZ 1 GOL, ID UNICO
  { equipeName: "flamengo", action: "falta", id: "68989648" }, // FLAMENGO FALTA, ID UNICO
  { equipeName: "flamengo", action: "gol", id: "53230b2" }, // FLAMENGO GOL, EVENTO REPETIDO(DESCONSIDERAR)
  { equipeName: "flamengo", action: "gol", id: "8925252" }, // FLAMENGO GOL, ID UNICO
  { equipeName: "flamengo", action: "golAnulation", id: "73285" }, // ANULAÇÃO GOLD PARA FLAMENGO, ID UNICO
];

soccerMatchResult(falseDatas);