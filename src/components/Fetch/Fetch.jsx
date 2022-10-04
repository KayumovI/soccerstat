const UrlCompetitions = "https://api.football-data.org/v2/competitions/"
const UrlTeams = "https://api.football-data.org/v2/teams/"
export const getLeaguesData = async () => {
  const api = await fetch(UrlCompetitions, {
    headers: {
      "x-auth-token": process.env.REACT_APP_API_KEY
    }
  })
  if (api.ok) {
    const json = await api.json()
    return json
  }
  else {
    console.error("Ошибка при получении данных о лигах")
    return null
  }
}
export const getTeamsData = async () => {
  const api = await fetch(UrlTeams, {
    headers: {
      "x-auth-token": process.env.REACT_APP_API_KEY
    }
  })
  if (api.ok) {
    const json = await api.json()
    return json
  } else {
    console.error("Ошибка при получении данных о командах")
    return null
  }
}

export const getTeamsMatches = async (teamId, queryDateFrom, queryDateTo) => {
  const api = await fetch(
    `https://api.football-data.org/v2/teams/${teamId}/matches?dateFrom=${queryDateFrom}&dateTo=${queryDateTo}`, {
    headers: {
      "x-auth-token": process.env.REACT_APP_API_KEY
    }
  })
  if (api.ok) {
    const json = await api.json()
    return json
  } else {
    console.error("Ошибка при получении данных о командах")
    return null
  }
}


export const getLeaguesMatches = async (leagueId, queryDateFrom, queryDateTo) => {
  const api = await fetch(
    `https://api.football-data.org/v2/competitions/${leagueId}/matches?dateFrom=${queryDateFrom}&dateTo=${queryDateTo}`, {
    headers: {
      "x-auth-token": process.env.REACT_APP_API_KEY
    }
  })
  if (api.ok) {
    const json = await api.json()
    return json
  } else {
    console.error("Ошибка при получении данных о лигах")
    return null
  }
}