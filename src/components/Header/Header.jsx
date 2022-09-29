import { AppBar, Toolbar, Container, Typography, Tab, Tabs, Box } from '@mui/material';
import logo from '../../assets/img/logoball.svg'
import "./Header.css"
import { useState } from "react"
import { Link } from 'react-router-dom';


const Header = () => {
  const [value, setValue] = useState('one')
  const handleChange = (event, newValue) => {
      setValue(newValue)
  }

  return (
    <AppBar position="static" >
            <Container sx={{ ml: 0}} >
                <Toolbar>
                  <img src={logo} className="logo" />
                    <Typography variant="h6" sx ={{ml: 2}}>Футбольная статистика</Typography>
                    <Box sx={{ width: '50%', ml: 1 }}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            textColor="inherit"
                            TabIndicatorProps={{ sx: { bgcolor: "white"} }}
                        >
                            <Tab value="one" label="Лиги" to="/League" component={Link} />
                            <Tab value="two" label="Команды" to="/Team" component={Link} />
                        </Tabs>
                    </Box>
                </Toolbar> 
            </Container>
      </AppBar>
  )
}

export default Header