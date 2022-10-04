import { Grid } from '@mui/material'
import LeagueItem from '../LeagueItem/LeagueItem.jsx'

function LeagueList({paginatedLeaguesList}){
    return(
        <Grid container spacing={2} justifyContent="center">
          {paginatedLeaguesList.map((league) => (
            <LeagueItem
                key={league.id}
                idLeague={league.id}
                name={league.area.name}
                nameLeague={league.name}
                flagLeague={league.area.ensignUrl}
            />
          ))}
        </Grid>
    )
}

export default LeagueList;