import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import TouristSpot from './TouristSpot';
const CountryBasedSpots = () => {
    const country = useLoaderData();
    const {countryName}=country;
    const [touristSpots, setTouristSpots]= useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/touristSpots/country/${countryName}`)
        .then(res=>res.json())
        .then(data=>{
            setTouristSpots(data)
        })
    },[])
    return (
        <div className='bg-orange-50 p-65'>
            <h1 className='text-center md:text-6xl font-extrabold text-2xl mb-5'>All tourist spots</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '>
                  {touristSpots.map(touristSpot=> <TouristSpot touristSpot={touristSpot} key={touristSpot._id}></TouristSpot>)} 
            </div>
        </div>
    );
};

export default CountryBasedSpots;