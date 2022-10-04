import {getTeamsMatches} from '../Fetch/Fetch.jsx'

const getTeamsMatchesClik = (teamId, strDateFrom, strDateTo) => {
    if(strDateFrom.length === 10 && strDateTo.length === 10){
        return getTeamsMatches(teamId, strDateFrom, strDateTo)
    } else{
        return getTeamsMatches(teamId, "", "")
    }
}

export default getTeamsMatchesClik