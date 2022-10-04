import { Pagination, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { useState } from 'react';
import filteredCountries from '../Filtered/Filtered.jsx';
import LeaguesList from '../LeagueList/LeagueList.jsx'
import SearchLine from '../Search/Search.jsx';


function PaginationLeagues({ leaguesList }) { 

        const [query, setQuery] = useState("");
        const [pageCount, setPageCount] = useState(1);

        const handleChange = (event, value) =>{
            setPageCount(value)
        }

        const update = (newQuery) => {
          setQuery(newQuery)
        }

        const filtered = filteredCountries(query, leaguesList)
        const contentPerPage = 10
        const lastIndex = pageCount * contentPerPage
        const firstIndex = lastIndex - contentPerPage

        const pageLeagueCount = Math.ceil(filtered.length / contentPerPage)
        const paginatedArray = leaguesList.slice(firstIndex, lastIndex) 

    return(
        <>
        <SearchLine query={query} update={update} />
          <Stack alignItems="center">
            {!paginatedArray.length ? (
              <Typography>
                Лиги с таким названием нет
              </Typography>
            ) : (
              <>
                <LeaguesList paginatedLeaguesList={paginatedArray} />
                <Pagination
                  size="large"
                  shape="rounded" 
                  count={pageLeagueCount}
                  page={pageCount}
                  onChange={handleChange}
                />
              </>
            )}
          </Stack>
      </>
    )
}

export default PaginationLeagues