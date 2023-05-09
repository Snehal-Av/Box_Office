import React from 'react'

const Cast = ({cast}) => {
  return (
    <div>
        {cast.map(({person,character,voice})=>(
            <div key={person.id}>
                <div>
                    <img src={person.image?person.image.medium:'/Not-Found-Img.png'}/>
                </div>
                <div>
                    {person.name} | {character.name}{voice&& '|voiceover'}
                </div>
            </div>

        ))
        }
    </div>
  )
}

export default Cast