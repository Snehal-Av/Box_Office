import React from 'react'
import { useState } from 'react';

const SearchForm = ({OnSearch}) => {
    const [searchOption, setSearchOption] = useState('show');
    const [searchInput, setSearchInput] = useState('')
    const SearchHandler = (e) => {
        setSearchInput(e.target.value)
      }
    
      const SearchForRadio = (e) => {
        setSearchOption(e.target.value)
      }

      const OnSubmit=(e)=>{
        e.preventDefault()

        const options={
            q:searchInput,
            searchOption
        }
        OnSearch(options)
      }
  return (
    <div>
        <form onSubmit={OnSubmit}>
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
      </form>
    </div>
  )
}

export default SearchForm