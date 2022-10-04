import {Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header.jsx'
import League from './components/League/League.jsx'
import Notfoundpage from './components/Notfoundpage/Notfoundpage.jsx'
import Team from './components/Team/Team.jsx'
import {getTeamsData, getLeaguesData }from './components/Fetch/Fetch.jsx'
import { useState , useEffect, React} from 'react'
import TeamsList from './components/TeamsList/TeamsList.jsx'
import SearchLine from './components/Search/Search.jsx'
import PaginationLeagues from './components/PaginationLeagues/PaginationLeagues.jsx'
import Routing from './components/Routing/Routing.jsx'
import { Box } from '@mui/material'


const App = () => {
  
  return (
    <> 
      <header>
          <Header />
      </header>
      <div>
      <Box>
        <Routing />
      </Box>
      </div>
    </>
  ) 
}

export default App 