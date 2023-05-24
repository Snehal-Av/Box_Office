import React from 'react'
import {styled} from 'styled-components'

const ActorCard = ({name,country,birthday,deathday,image,gender}) => {
  return (
    <SearchCard>
        <SearchImgWrapper>
            <img src={image} alt={name}/>
        </SearchImgWrapper>
        <h1>
        {name} {!!gender && `(${gender})`}
        </h1>
        <p>{country? `come from ${country}`:'No Country Known'}</p>
        {!!birthday && <p>born on {birthday}</p>}
        <p>{deathday?`died ${deathday}`:'Alive'}</p>
    </SearchCard>
  )
}

export default ActorCard

const SearchCard = styled.div`
  width: 300px;
  height: 100%;
  margin: 0 15px 40px;
  h1 {
    margin: 10px 0;
    font-size: 21px;
  }
  p {
    margin-top: 0;
    margin-bottom: 5px;
  }
`;
const SearchImgWrapper = styled.div`
  width: 100%;
  height: 420px;
  border-radius: 40px;
  overflow: hidden;
  border: 1px solid #ddd;
  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`;