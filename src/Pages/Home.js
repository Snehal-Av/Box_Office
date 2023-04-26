import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const[searchInput,setSearchInput]=useState('')
  const SearchHandler=(e)=>{
    setSearchInput(e.target.value)
  }

  const OnSearch=async(e)=>{
    e.preventDefault()
    const response=await fetch(`https://api.tvmaze.com/search/shows?q=${searchInput}`)
    const body=await response.json()
    console.log(body)
  }

  return (
    <div>
      <form onSubmit={OnSearch}>
        <input type='text' value={searchInput} onChange={SearchHandler}/>
        <button type='submit'>search</button>
      </form>
    </div>
  )
}

export default Home