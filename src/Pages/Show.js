// import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { GetShowById } from '../api/TvMaze'
import { useQuery } from '@tanstack/react-query'
import ShowMainData from '../Components/Shows/ShowMainData.js'
import Details from './Details'
import Seasions from '../Components/Shows/Seasions'
import Cast from '../Components/Shows/Cast'
import {styled} from 'styled-components'



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
  
  if(showError){
    return<TextCenter>we have Error:{showError.message}</TextCenter>
  }

  if(showData){
    return (
    <ShowPageWrapper>
    <BackHomeWrapper>
    <Link to='/'>Go Back To Home</Link>
    </BackHomeWrapper>
      
     <ShowMainData
     image={showData.image}
     name={showData.name}
     rating={showData.rating}
     summary={showData.summary}
     genres={showData.genres}
     />
     <InfoBlock>
      <Details 
      status={showData.status}
      premiered={showData.premiered}
      network={showData.network}

      />
     </InfoBlock>
     <InfoBlock>
      <h2>Seasions</h2>
     <Seasions
     seasons={showData._embedded.seasons}
     />
     </InfoBlock>
     <InfoBlock>
      <h2>Cast</h2>
     <Cast
     cast={showData._embedded.cast} 
     />
     </InfoBlock>
    </ShowPageWrapper>
    )
  }
  
  return (
    <div>
    <TextCenter>Data is loading</TextCenter>
    </div>
  )
}

export default Show

const BackHomeWrapper = styled.div`
  margin-bottom: 30px;
  text-align: left;
  a {
    padding: 10px;
    color: ${({ theme }) => theme.mainColors.dark};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ShowPageWrapper = styled.div`
  margin: auto;
  @media only screen and (min-width: 768px) {
    max-width: 700px;
  }
  @media only screen and (min-width: 992px) {
    max-width: 900px;
  }
`;

const InfoBlock = styled.div`
  margin-bottom: 40px;
  h2 {
    margin: 0;
    margin-bottom: 30px;
    font-size: 22px;
  }
`;
const TextCenter = styled.div`
  text-align: center;
`;
