import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import { SearchForShows ,SearchForPeople } from '../api/TvMaze'
import SearchForm from '../Components/SearchForm';
import ShowGrid from '../Components/Shows/ShowGrid';
import ActorGrid from '../Components/Actors/ActorGrid';

const Home = () => {
  
  const [apiData, setApiData] = useState(null);
  const [apiDataError, setApiDataError] = useState(null);
  
  const OnSearch = async ({q,searchOption}) => {
    
    try {
      setApiDataError(null)
      if(searchOption==='shows'){
        const result = await SearchForShows(q)
        setApiData(result)
      }
      else{
      const result = await SearchForPeople(q)
      setApiData(result)
      }
    } catch (error) {
      setApiDataError(error)
    }
  }

  const RenderApiData = () => {

    if (apiDataError) {
      return <div>Error Occurred:{apiDataError.message}</div>
    }

    if(apiData?.length==0){
      return <div>No Result</div>
    }

    if (apiData) {
      return apiData[0].show?(<ShowGrid shows={apiData}/>):(<ActorGrid actors={apiData}/>)
      
      }
  }

  return (
    <div>
      <SearchForm OnSearch={OnSearch}/>
      {/* <form onSubmit={OnSearch}>
        <input type='text' value={searchInput} onChange={SearchHandler} />
        <label>
          Shows
          <input type='radio' name='Search-option'
            value='shows'
            checked={searchOption === 'shows'}
            onChange={SearchForRadio} />
        </label>
        <label>
          Actors
          <input type='radio' name='Search-option'
            value='Actors'
            checked={searchOption === 'Actors'}
            onChange={SearchForRadio} />
        </label>
        <button type='submit'>search</button>
      </form> */}
      <div>{RenderApiData()}</div>
    </div>
  )
}

export default Home