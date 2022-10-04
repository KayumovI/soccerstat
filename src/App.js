import Header from './components/Header/Header.jsx'
import { React} from 'react'
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