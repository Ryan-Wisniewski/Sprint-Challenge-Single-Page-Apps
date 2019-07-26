import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LocationsCard from './LocationsCard'

export default function LocationsList() {
    const [locations, setLocations] = useState([])

    useEffect(()=>{
        axios.get(`https://rickandmortyapi.com/api/location/`)
        .then(response => {
            const res = response.data.results
            console.log('lookhere', res)
            setLocations(res)

        })
        .catch(error => {return 'Server Api is not functioning', error})

    },[])
    return(
        <div> 
            <h2>{locations.map(data => {
                return <LocationsCard key={data.id} dimension={data.dimension} name={data.name} type={data.type}/>}
            )}</h2>
            
        </div>
       
    )
}
