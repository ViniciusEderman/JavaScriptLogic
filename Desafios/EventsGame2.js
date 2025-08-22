function mappingEvent(events) {
  const result = {};

  const initializeTeams = (matchId) => ({
    team1: {
      actions: { gols: 0, yellowCards: 0, redCards: 0, lacks: 0, cancelGols: 0 },
      teamName: "",
      matchIds: [],
    },
    team2: {
      actions: { gols: 0, yellowCards: 0, redCards: 0, lacks: 0, cancelGols: 0 },
      teamName: "",
      matchIds: [],
    },
  });

  const getCurrentTeam = (match, teamName) => {
    if (match.team1.teamName === teamName) return match.team1;
    if (match.team2.teamName === teamName) return match.team2;
    return null;
  };

  events.forEach((event) => {
    const { matchId, teamName, action } = event;

    if (!result[matchId]) {
      result[matchId] = initializeTeams(matchId);
    }

    const currentMatch = result[matchId];

    if (!currentMatch.team1.teamName) {
      currentMatch.team1.teamName = teamName;
      currentMatch.team1.matchIds.push(matchId);
      return; // Retorna após a inicialização
    }

    if (!currentMatch.team2.teamName && teamName !== currentMatch.team1.teamName) {
      currentMatch.team2.teamName = teamName;
      currentMatch.team2.matchIds.push(matchId);
      return; // Retorna após a inicialização
    }

    // Ignorar evento se a equipe não for válida
    if (teamName !== currentMatch.team1.teamName && teamName !== currentMatch.team2.teamName) {
      return;
    }

    const currentTeam = getCurrentTeam(currentMatch, teamName);

    switch (action) {
      case "gol":
        currentTeam.actions.gols++;
        break;
      case "falta":
        currentTeam.actions.lacks++;
        break;
      case "gol anulado":
        if (currentTeam.actions.gols > 0) {
          currentTeam.actions.cancelGols++;
          currentTeam.actions.gols--;
        }
        break;
      default:
        console.log("Ação desconhecida");
    }
  });

  console.log(JSON.stringify(result, null, 2));
  return result;
}

// Mocked data
const events = [
  { matchId: 1, teamName: "Time A", action: "gol" },
  { matchId: 1, teamName: "Time B", action: "falta" },
  { matchId: 1, teamName: "Time B", action: "gol" },
  { matchId: 1, teamName: "Time A", action: "gol anulado" },
  { matchId: 1, teamName: "Time C", action: "gol" }, // Evento inválido
];

mappingEvent(events);
