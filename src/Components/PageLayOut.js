import React from 'react'
import { Outlet } from 'react-router-dom'
import AppTitle from './AppTitle'
import Navigation from './Navigation'
const PageLayOut = () => {
  return (
    <div>
        <AppTitle/>
        <Navigation/>
        <Outlet/> 
    </div>
  )
}

export default PageLayOut