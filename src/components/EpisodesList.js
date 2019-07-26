import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EpisodesCard from './EpisodesCard'

function EpisodesList(){
    const[episode, setEpisode] = useState([])
useEffect(()=>{
    axios.get(`https://rickandmortyapi.com/api/episode/`)
    .then(response => {
        const res = response.data.results
        console.log('checkresponse', response.data.results)
        setEpisode(res)
    })
    .catch(error => {return 'Server Api not functioning.', error})
}, [])

    return(
        <section>
            {episode.map(data => {return <EpisodesCard key={data.id} name={data.name} episode={data.episode} air_date={data.air_date}/>})}}
        </section>
    )
}

export default EpisodesList