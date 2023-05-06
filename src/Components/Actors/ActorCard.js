import React from 'react'

const ActorCard = ({name,country,birthday,deathday,image,gender}) => {
  return (
    <div>
        <div>
            <img src={image} alt={name}/>
        </div>
        <h1>
        {name} {!!gender && `(${gender})`}
        </h1>
        <p>{country? `come from ${country}`:'No Country Known'}</p>
        {!!birthday && <p>born on {birthday}</p>}
        <p>{deathday?`died ${deathday}`:'Alive'}</p>
    </div>
  )
}

export default ActorCard