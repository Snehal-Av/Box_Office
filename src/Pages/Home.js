import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <Link to='/starred'><h1>Go to Starred Page</h1></Link>
    </div>
  )
}

export default Home