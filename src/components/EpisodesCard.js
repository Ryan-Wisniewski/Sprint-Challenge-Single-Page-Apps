import React from 'react'

export default function EpisodesCard (props){
    console.log('props4Episode', props)
    return(
        <div className='card-border-episode'>
            <h1>{props.name}</h1>
            <p>{props.episode}</p>
            <p>{props.air_date}</p>
        </div>
    )
}