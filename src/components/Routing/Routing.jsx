import { Routes, Route } from "react-router-dom"

import LeaguesMatches from '../LeaguesMatches/LeaguesMatches.jsx'
import TeamsMatches from '../TeamMatches/TeamMatches.jsx'
import PaginationLeagues from '../PaginationLeagues/PaginationLeagues.jsx'
import PaginationTeams from '../PaginationTeams/PaginationTeams.jsx'
import Notfoundpage from '../Notfoundpage/Notfoundpage.jsx'

import { getLeaguesData, getTeamsData } from "../Fetch/Fetch.jsx"
import { useEffect, useState } from "react"

function Routing() {

  const [leaguesList, setLeaguesList] = useState([])
  const [teamsList, setTeamsList] = useState([])

  useEffect(() =>{
    const dataLeagues = async () =>{
    const apiLeagues = await getLeaguesData();

    if (!apiLeagues) return 
        console.log("Данные о лигах", apiLeagues);
        setLeaguesList(apiLeagues.competitions)

    }
    dataLeagues()
  }, [])

  useEffect(() =>{
    const dataTeams = async () =>{
    const apiTeams = await getTeamsData();

    if (!apiTeams) return
        console.log("Данные о командах", apiTeams);
        setTeamsList(apiTeams.teams)
    }
    dataTeams()
  }, [])

  const leaguesMatches = leaguesList.map((league) => (
    <Route
      path={`/leagues/${league.id}/matches`}
      element={<LeaguesMatches league={league} />}
      key={league.id}
    />
  ))
  const teamsMatches = teamsList.map((team) => (
    <Route
      path={`/teams/${team.id}/matches`}
      element={<TeamsMatches team={team} />}
      key={team.id}
    />
  ))

    return (
      <Routes>
        <Route path="/soccerstat" element={<PaginationLeagues leaguesList={leaguesList}/>} /> 
        <Route path="/teams" element={<PaginationTeams teamsList={teamsList}/>} />
        {leaguesMatches}
        {teamsMatches}
        <Route path="*" element={<Notfoundpage />} /> 
      </Routes>
       )
      }
      
      export default Routing;