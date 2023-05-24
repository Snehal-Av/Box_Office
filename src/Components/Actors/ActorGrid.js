import React from 'react'
import ActorCard from './ActorCard'
import {styled} from 'styled-components'
const ActorGrid = ({actors}) => {
  return (
    <FlexGrid>
        {
        actors.map((data)=>(
           <ActorCard 
           key={data.person.id}
           name={data.person.name}
           image={
            data.person.image?data.person.image.medium:'/Not-Found-Img.png'
           }
           country={data.person.country?data.person.country.name:null}
           birthday={data.person.birthday}
           deathday={data.person.deathday}
           gender={data.person.gender}
           /> 
        ))
       }
    </FlexGrid>
  )
}

export default ActorGrid

const FlexGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

 
`;