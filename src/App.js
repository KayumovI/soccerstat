import {Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header.jsx'
import League from './components/League/League.jsx'
import Notfoundpage from './components/Notfoundpage/Notfoundpage.jsx'
import Team from './components/Team/Team.jsx'
import {getTeamsData, getLeaguesData }from './components/Fetch/Fetch.jsx'
import { useState , useEffect, React} from 'react'
import TeamsList from './components/TeamsList/TeamsList.jsx'

const App = () => {
  
  const [leaguesList, setLeaguesList] = useState([])
  const [teamsList, setTeamsList] = useState([])

  //получаем элементы
  useEffect(() =>{
    /*Асинхронный(одновременный) запрос на получение данных*/
    const dataLeagues = async () =>{
    /*fetch - метод, позволяющий полностью прочитать url адрес и получить данные*/
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
    <> 
      <header>
          <Header />
      </header>
      <div>
        <Routes>
          <Route path="/soccerstat" element={<League/>} />
          <Route path="/Team" element={<Team/>} />
          <Route path="/*" element={<Notfoundpage/>} />
        </Routes>
        <TeamsList teamsList = {teamsList} />
      </div>
    </>
  ) 
}

export default App 