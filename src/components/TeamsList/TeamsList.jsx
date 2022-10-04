import { Grid } from '@mui/material'
import TeamsItem from '../TeamsItem/TeamsItem.jsx'

function TeamsList({paginatedTeamsList}){


    return(
        <Grid container spacing={3} justifyContent="center">
          {paginatedTeamsList.map((team) => (
            <TeamsItem
                key={team.id} 
                idTeam={team.id}
                nameTeam={team.name}
                flagTeam={team.crestUrl}
            />
          ))}
        </Grid>
    )

}

export default TeamsList;