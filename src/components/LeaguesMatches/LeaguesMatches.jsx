import { Breadcrumbs, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useEffect } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import DataGridMatches from "../DataGridMatches/DataGridMatches.jsx"
import DatePickerMatches from "../DatePicker/DatePicker.jsx"


import getLeaguesMatchesClik from '../GetLeaguesMatchesClik/GetLeaguesMatchesClik.jsx'

function LeaguesMatches({league}){ 

    const[dateFrom, setDateFrom] = useState(null) 
    const [dateTo, setDateTo] = useState(null) 
    const [dateFromString, setDateFromString] = useState("")
    const [dateToString, setDateToString] = useState("")
    const [leagueMatches, setLeagueMatches] = useState([])

    useEffect(() =>{
        const api = async () => {
            const jsonTeamMatches = await getLeaguesMatchesClik(league.id, dateFromString, dateToString)
            if(!jsonTeamMatches) return
            setLeagueMatches(jsonTeamMatches.matches) 
        }
        api()
    },[dateFromString, dateToString])

    /*----------вычисление числа даты---------*/
    const dateNumber = (number) => {
        if (Math.floor(number/10) === 0){
            return `0${number}`
        }else {
            return number
        }
    }

    const updateFrom = (newDate) => {
        setDateFrom(newDate) 
        if(newDate !== null){
            setDateFromString(`${newDate.$y}-${dateNumber(newDate.$M+1)}-${dateNumber(newDate.$D)}`)
        }
    }

    const updateTo = (newDate) => {
        setDateTo(newDate)
        if(newDate !== null){
            setDateToString(`${newDate.$y}-${dateNumber(newDate.$M+1)}-${dateNumber(newDate.$D)}`)
        }
    }

    const updateLeague = (newMatch) => {
        setLeagueMatches(newMatch)
    }


    return(
        <Box>
            <Breadcrumbs margin={2}> 
                <Link to="/soccerstat" underline="hover"> 
                    <Typography variant='subtitle1' letterSpacing={2} color="primary.main">Лиги</Typography>
                </Link>
                <Typography variant='subtitle1' letterSpacing={2}>{league.name}</Typography>
            </Breadcrumbs>

            <Typography variant='h3' align="left" margin={2}>Матчи</Typography>

            <div align="left">
                <DatePickerMatches
                    label="с"
                    date={dateFrom}
                    update={updateFrom}
                    maxDate={dateTo}
                />
                <DatePickerMatches
                    label="по"
                    date={dateTo}
                    update={updateTo}
                    minDate={dateFrom}
                />
            </div>


            <DataGridMatches
                matches={leagueMatches}
                updateMatches={updateLeague}
            />

        </Box>
    )
}
export default LeaguesMatches;