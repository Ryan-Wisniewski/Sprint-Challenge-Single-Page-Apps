import React from 'react'

export default function LocationsCard (props) {
  return (
  <div  className='card-border-location'>
    <h1>{props.name}</h1>
    <p>{props.dimension}</p> 
    <p>{props.type}</p>
    {/* <p>{props.residents}</p> */}
  </div>
  )
}
