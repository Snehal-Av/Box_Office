import React, { useEffect, useReducer } from 'react'
import ShowCard from './ShowCard'
import {styled} from 'styled-components'

// const usePersistedReducer=(reducer,initialState,localStorageKey)=>{
//  const [state,dispatch]=useReducer(reducer,initialState,initial=>{
//   const PersistedValue=localStorage.getItem(localStorageKey);
//   return PersistedValue ? JSON.parse(PersistedValue): initial;
//  })

//  useEffect(()=>{
//   localStorage.setItem(localStorageKey,JSON.stringify(state))
//  },[state,localStorageKey]);

//  return [state,dispatch]
// }



// const StarredShowReducer=(currentStarred,action)=>{
//  switch (action.type) {
//   case 'STAR':
//     return currentStarred.concat(action.showId)
//   case 'UNSTAR':
//     return currentStarred.filter((showId)=>showId !== action.showId)
//  }
// }

const ShowGrid = ({shows}) => {
  // const [starredShows,dispatchStarred]=usePersistedReducer(
  //   StarredShowReducer,[],"starred")

  // const onStarredMeClick=(showId)=>{
  //   const isStarred=starredShows.includes(showId)
  //   if(isStarred){
  //     dispatchStarred({type:'UNSTAR',showId})
  //   }
  //   else{
  //     dispatchStarred({type:'STAR',showId})
  //   }
  // }

  return (
    <FlexGrid>
       {
        shows.map((data)=>(
           <ShowCard 
           key={data.show.id}
           id={data.show.id}
           name={data.show.name}
           image={data.show.image? data.show.image.medium:'/Not-Found-Img.png'}
           summary={data.show.summary}
          //  onStarredMeClick={onStarredMeClick}
          //  isStarred={starredShows.includes(data.show.id)}
           />
        ))
       }
    </FlexGrid>
  )
}

export default ShowGrid

const FlexGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

 
`;