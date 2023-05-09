// import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { GetShowById } from '../api/TvMaze'
import { useQuery } from '@tanstack/react-query'
import ShowMainData from '../Components/Shows/ShowMainData.js'
import Details from './Details'
import Seasions from '../Components/Shows/Seasions'
import Cast from '../Components/Shows/Cast'


// const useShowById=(showId)=>{

//   const[showData,setShowData]=useState(null);
//   const[showError,setShowError]=useState(null);

//   useEffect(() => {
//     const fetchData=async()=>{
//     try {
//       const data=await GetShowById(showId)
//       setShowData(data)
//     } catch (error) {
//       setShowError(error)
//     }
//     }
//     fetchData()
//   },[showId]);
//   return {showData,showError}
  
// }

const Show = () => {
  const { showId } = useParams()

  const navigate=useNavigate()
  
  const{data:showData,error:showError}=useQuery({
    queryKey:['show',showId],
    queryFn:()=>GetShowById(showId),
  })

  const OnClick=()=>{
    navigate("/")
  }

  if(showError){
    return<div>we have Error:{showError.message}</div>
  }

  if(showData){
    return (
    <div>

      <button type='button' onClick={OnClick}>Go Back To Home</button>
     <ShowMainData
     image={showData.image}
     name={showData.name}
     rating={showData.rating}
     summary={showData.summary}
     genres={showData.genres}
     />
     <div>
      <Details 
      status={showData.status}
      premiered={showData.premiered}
      network={showData.network}

      />
     </div>
     <div>
      <h2>Seasions</h2>
     <Seasions
     seasons={showData._embedded.seasons}
     />
     </div>
     <div>
      <h2>Cast</h2>
     <Cast
     cast={showData._embedded.cast} 
     />
     </div>
    </div>
    )
  }
  
  return (
    <div>
    <div>Data is loading</div>
    </div>
  )
}

export default Show