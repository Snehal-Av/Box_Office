import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GetShowById } from '../api/TvMaze'

const Show = () => {
  const { showId } = useParams()

  const[showData,setShowData]=useState(null);
  const[showError,setShowError]=useState(null);

  useEffect(() => {
    const fetchData=async()=>{
    try {
      const data=await GetShowById(showId)
      setShowData(data)
    } catch (error) {
      setShowError(error)
    }
    }
    fetchData()
  },[showId]);

  if(showError){
    return<div>we have Error:{showError.message}</div>
  }

  if(showData){
    return <div>We have DAta:{showData.name}</div>
  }
  
  return (
    <div>
    <div>Data is loading</div>
    </div>
  )
}

export default Show