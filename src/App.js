import { typography as Typography } from '@mui/system'
import {Link, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header.jsx'
import League from './components/League/League.jsx'
import Notfoundpage from './components/Notfoundpage/Notfoundpage.jsx'
import Team from './components/Team/Team.jsx'
import React from 'react';


const App = () => {
  return (
    <> 
      <header>
          <Header />
      </header>
      <div>
        <Routes>
          <Route path="/soccerstat/" element={<League/>} />
          <Route path="/soccerstat/Team" element={<Team/>} />
          <Route path="/soccerstat/*" element={<Notfoundpage/>} />
        </Routes>
        
      </div>


    </>
    
  )
}

export default App 