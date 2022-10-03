import { Grid } from '@mui/material'
import TeamsItem from '../TeamsItem/TeamsItem.jsx'

function TeamsList({teamsList}){


    return(
        <Grid container spacing={3} justifyContent="center">
          {/*берем массив dailyWeather, принимает элемент day
          проходимся по массиву и преобразуем этот массив в jsx элемент*/}
          {teamsList.map((team) => (
            <TeamsItem
                key={team.id} //особенность реакта
                idTeam={team.id}
                nameTeam={team.name}
                flagTeam={team.crestUrl}
            />
          ))}
        </Grid>
    )

}

export default TeamsList;