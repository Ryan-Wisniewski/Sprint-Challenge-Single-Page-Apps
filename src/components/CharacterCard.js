import React from 'react'

export default function CharacterCard (props) {
  // console.log('props', props)
  return (
  <div  className='card-border-character'> 
    <img  className='sub-img' src={props.img}/>
    <h1>{props.name}</h1>
    <p>Location: {props.location.name}</p>
    <p>Origin: {props.origin.name}</p>
  </div>
  )
}
