import React from 'react'

const Seasions = ({seasons}) => {
  return (
    <div>
     <p>Seasons in Totle:{seasons.length}</p>
     <p>
        Episodes in Totle:{' '}
        {seasons.reduce((sum,season)=>sum+season.episodeOrder,0)}
     </p>
     <div>
        {
            seasons.map((season)=>(
                <div key={season.id}>
                    <p>Seasons:{season.number}</p>
                    <p>Episodes:{season.episodeOrder}</p>
                    <div>
                        Aired:{season.premiereDate}-{season.endData}
                    </div>
                </div>
            ))
        }
     </div>

    </div>
  )
}

export default Seasions