import { Routes, Route } from "react-router-dom"

import Leagues from '../League/League.jsx'
import Teams from '../Team/Team.jsx'

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
        console.log("Данные о лигах в формате json", apiLeagues);
        setLeaguesList(apiLeagues.competitions)

    }
    dataLeagues()
  }, [])

  useEffect(() =>{
    const dataTeams = async () =>{
    const apiTeams = await getTeamsData();

    if (!apiTeams) return
        console.log("Данные о командах в формате json", apiTeams);
        setTeamsList(apiTeams.teams)
    }
    dataTeams()
  }, [])

    return (
      <Routes>
        <Route path="/soccerstat" element={<PaginationLeagues leaguesList={leaguesList}/>} /> 
        <Route path="/teams" element={<PaginationTeams teamsList={teamsList}/>} />
        {/*  
        


        <Route path="*" element={<Notfoundpage />} /> 
        
        
        */}
        
      </Routes>
       )
      }
      
      export default Routing;