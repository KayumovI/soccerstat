import {Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header.jsx'
import League from './components/League/League.jsx'
import Notfoundpage from './components/Notfoundpage/Notfoundpage.jsx'
import Team from './components/Team/Team.jsx'
import {getTeamData, getLeagueData }from './components/Fetch/Fetch.jsx'
import { useState , useEffect, React} from 'react'

const App = () => {
  
  const [league, setleague] = useState([])
  const [team, setteam] = useState([])
  useEffect(() =>{
    const dataLeague = async () =>{
    const apiLeague = await getLeagueData();
    if (!apiLeague) return 
        console.log("Данные о лигах", apiLeague);
        setleague(apiLeague.competitions)
    }
    dataLeague()
  }, [])
  useEffect(() =>{
    const dataTeam = async () =>{
    const apiTeam = await getTeamData();
    if (!apiTeam) return
        console.log("Данные о командах", apiTeam);
        setteam(apiTeam.team)
    }
    dataTeam()
  }, [])

  return (
    <> 
      <header>
          <Header />
      </header>
      <div>
        <Routes>
          <Route path="/" element={<League/>} />
          <Route path="/Team" element={<Team/>} />
          <Route path="*" element={<Notfoundpage/>} />
        </Routes>
      </div>
    </>
  ) 
}

export default App 