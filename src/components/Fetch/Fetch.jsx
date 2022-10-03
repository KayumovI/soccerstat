const UrlCompetitions = "https://api.football-data.org/v2/competitions/"
const UrlTeam = "https://api.football-data.org/v2/teams/"

export async function getLeaguesData() {
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
export async function getTeamsData() {
  const api = await fetch(UrlTeam, {
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