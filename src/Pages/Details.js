import React from 'react'

const Details = ({status,network,premiered}) => {
  return (
    <div>
      <p>Status:{status}</p>
      <p>{premiered} {!!network && `on ${network.name}`}</p>
    </div>
  )
}

export default Details