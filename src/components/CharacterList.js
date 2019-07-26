import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
const [character, setCharacter] = useState([])
  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {
        const res = response.data.results
        console.log('response', response.data.results)
        setCharacter(res)
      })
      .catch(error => {return 'Server API not functioning', error})
  }, [])

  return <section className='character-list grid-view'>

      <h2>{character.map(data => {
        return  <CharacterCard 
        key={data.id}
        img={data.image}
        name={data.name} 
        location={data.location}
        origin={data.origin}
        
        />
      })}</h2>
    </section>

}
// console.log('data',data),