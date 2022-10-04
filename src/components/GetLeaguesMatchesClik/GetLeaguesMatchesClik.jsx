import {getLeaguesMatches} from '../Fetch/Fetch.jsx'
      
const getLeaguesMatchesClik = (leaqueId, strDateFrom, strDateTo) => {
    if(strDateFrom.length === 10 && strDateTo.length === 10){
        return getLeaguesMatches(leaqueId, strDateFrom, strDateTo)
    } else{
        return getLeaguesMatches(leaqueId, "", "")
    }
}

export default getLeaguesMatchesClik