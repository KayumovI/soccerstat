import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import noimg from '../../assets/img/noimg.jpg'
import { Link } from "react-router-dom"


function LeagueItem({idLeague, nameLeague, name, flagLeague}){

    const leagueLink = `/leagues/${idLeague}/matches` 

    if(!flagLeague){
        flagLeague=noimg
    }

    return(
        <Grid item xs={2} margin={3} my={5}> 
            <Card> 
                <CardActionArea component={Link} to={leagueLink}>
                    <CardMedia 
                        component="img"
                        alt="Картинка лиги"
                        src={flagLeague}
                        sx={{ height: 200, pb: "10px" }}
                    />

<                   Typography sx={{ fontWeight: "bold" }} variant="h6">
                        {nameLeague}
                    </Typography>

                    <Typography variant="overline" color="gray">
                        {name}
                    </Typography> 

                </CardActionArea>
            </Card>
        </Grid>
    )

}

export default LeagueItem;