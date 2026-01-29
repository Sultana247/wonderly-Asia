import React, { useContext, useEffect, useState } from 'react';
import Banner from './Banner';
import { Link, useLoaderData } from 'react-router';
import TouristSpot from './TouristSpot';
import Countries from './Countries';
import AuthContext from '../provider/AuthContext';
const Home = () => {
    const {lightTheme}=useContext(AuthContext);
    const touristSpots = useLoaderData();
    const [countries, setCountries]=useState([]);

    useEffect(()=>{
        fetch('https://wanderly-asia-server.vercel.app/countries')
        .then(res=>res.json())
        .then(data=>{
            setCountries(data)
        })
    },[])
    return (
       
        <div className=''>
          
           <Banner></Banner>
            {lightTheme ? <div className='max-w-6xl mx-auto mt-30 '>
                <h3 className='md:text-6xl text-xl text-center mb-15'>Explore South Asia Like Never Before</h3>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-25'>
                    {touristSpots.slice(0, 6).map(touristSpot => <TouristSpot touristSpot={touristSpot} key={touristSpot._id}></TouristSpot>)}
                </div>
                  <h3 className='md:text-6xl text-xl text-center mb-10'>South Asia Countries</h3>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-15'>
                    {countries.map(country => <Countries country={country} key={country._id}></Countries>)}
                </div>
            </div>
            : 
            // dark home
            <div className='bg-black text-white'>
                <div className='max-w-6xl mx-auto mt-30 pt-30'>
                <h3 className='md:text-6xl text-xl text-center mb-10'>Explore South Asia Like Never Before</h3>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-25'>
                    {touristSpots.slice(0, 6).map(touristSpot => <TouristSpot touristSpot={touristSpot} key={touristSpot._id}></TouristSpot>)}
                </div>
                  <h3 className='md:text-6xl text-xl text-center mb-10'>South Asia Countries</h3>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-25'>
                    {countries.map(country => <Countries country={country} key={country._id}></Countries>)}
                </div>
            </div>
            </div>
            }
            </div>
    );
};

export default Home;