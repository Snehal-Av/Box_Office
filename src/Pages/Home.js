import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import { SearchForShows } from '../api/TvMaze'

const Home = () => {
  const [searchInput, setSearchInput] = useState('')
  const [apiData, setApiData] = useState(null);
  const [apiDataError, setApiDataError] = useState(null)
  const SearchHandler = (e) => {
    setSearchInput(e.target.value)
  }

  const OnSearch = async (e) => {
    e.preventDefault()
    try {
      setApiDataError(null)
      const result = await SearchForShows(searchInput)
      setApiData(result)
    } catch (error) {
      setApiDataError(error)
    }
  }

  const RenderApiData = () => {

    if (apiDataError) {
      return <div>Error Occurred:{apiDataError.message}</div>
    }

    if (apiData) {
      return apiData.map((data) =>
        <div key={data.show.id}>{data.show.name}</div>
      )
    }
  }

  return (
    <div>
      <form onSubmit={OnSearch}>
        <input type='text' value={searchInput} onChange={SearchHandler} />
        <button type='submit'>search</button>
      </form>
      <div>{RenderApiData()}</div>
    </div>
  )
}

export default Home