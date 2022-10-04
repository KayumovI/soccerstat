import TeamsList from "../TeamsList/TeamsList.jsx"
import SearchLine from "../Search/Search.jsx"
import { useState } from "react";
import { Stack } from "@mui/system";
import { Pagination, Typography } from "@mui/material";
import filteredCountries from "../Filtered/Filtered.jsx";


function PaginationTeams({ teamsList }) { //приходит параметр из роутинга

    // We start with an empty list of items.
    const [query, setQuery] = useState("");
    const [pageCount, setPageCount] = useState(1);

    const handleChange = (event, value) =>{
      setPageCount(value)
    }

    const update = (newQuery) => {
      setQuery(newQuery)
    }

    const filtered = filteredCountries(query, teamsList)
    const contentPerPage = 10
    const lastIndex = pageCount * contentPerPage
    const firstIndex = lastIndex - contentPerPage

    const pageTeamsCount = Math.ceil(filtered.length / contentPerPage)
    const paginatedArray = filtered.slice(firstIndex, lastIndex) 
    console.log(".....................", pageTeamsCount)

    return (
      <>
        <SearchLine query={query} update={update} />
          <Stack alignItems="center">
            {!paginatedArray.length ? (
              <Typography>
                Команды с таким названием нет
              </Typography>
            ) : (
              <>
                <TeamsList paginatedTeamsList={paginatedArray} />
                <Pagination
                  size="large"
                  shape="rounded" 
                  count={pageTeamsCount}
                  page={pageCount}
                  onChange={handleChange}
                />
              </>
            )}
          </Stack>
      </>
    )
  }

  export default PaginationTeams