import React, { useState,useReducer } from 'react'
// import { Link } from 'react-router-dom'
import { SearchForShows ,SearchForPeople } from '../api/TvMaze'
import SearchForm from '../Components/SearchForm';
import ShowGrid from '../Components/Shows/ShowGrid';
import ActorGrid from '../Components/Actors/ActorGrid';
import { useQuery } from '@tanstack/react-query';


const ReducerFn=(currentCounter,action)=>{
  switch (action.type) {
    case 'INCREMENT':
     return currentCounter +1
    case 'DECREMENT':
     return currentCounter -1
    case 'RESET':
      return 0
    
  }
  return 0
}
const Home = () => {

  const [filter,setFilter]=useState(null)

  const[counter,dispatch]=useReducer(ReducerFn,0)
  
  const OnIncrement=()=>{
    dispatch({type:'INCREMENT'})
  }
  const OnDecrement=()=>{
    dispatch({type:'DECREMENT'})
  }
  const OnReset=()=>{
    dispatch({type:'RESET'})
  }

  const {data:apiData,error:apiDataError}=useQuery({
    queryKey:['search',filter],
    queryFn:()=>
    filter.searchOption==='shows'
    ?SearchForShows(filter.q)
    :SearchForPeople(filter.q),
    enabled:!!filter,
    refetchOnWindowFocus:false
  })
  
  // const [apiData, setApiData] = useState(null);
  // const [apiDataError, setApiDataError] = useState(null);
  
  const OnSearch = async ({q,searchOption}) => {
    setFilter({q,searchOption})
  //   try {
  //     setApiDataError(null)
  //     if(searchOption==='shows'){
  //       const result = await SearchForShows(q)
  //       setApiData(result)
  //     }
  //     else{
  //     const result = await SearchForPeople(q)
  //     setApiData(result)
  //     }
  //   } catch (error) {
  //     setApiDataError(error)
  //   }
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

      <div>
        Counter:{counter}
      </div>
      <button type='button' onClick={OnIncrement}>Increment</button>
      <button type='button' onClick={OnDecrement}>Decrement</button>
      <button type='button' onClick={OnReset}>Reset</button>


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