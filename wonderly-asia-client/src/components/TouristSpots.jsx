import React, {  useState } from 'react';
import { FaChevronRight } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { useLoaderData } from 'react-router';
import TouristSpot from './TouristSpot';
const TouristSpots = () => {
    
    const touristPlaces = useLoaderData();
    const [touristSpots, settouristSpots]=useState(touristPlaces);
    const handleSort=(sortby)=>{
        if(sortby === 'ascending-name'){
            const sortedPlaces = [...touristPlaces].sort((a, b) => a.touristSpotName.toLowerCase().localeCompare(b.touristSpotName.toLowerCase()) );
            settouristSpots(sortedPlaces);
        }
        if(sortby === 'descending'){
            const sortedPlaces = [...touristPlaces].sort((a, b) => b.touristSpotName.localeCompare(a.touristSpotName));
            settouristSpots(sortedPlaces);
        }
        if(sortby === 'average-cost'){
            const sortedPlaces = [...touristPlaces].sort((a, b) => b.cost - a.cost);
            settouristSpots(sortedPlaces);
        }
    }
    
    return (
        <div className='bg-orange-50 pt-65'>
            <div className=' max-w-6xl mx-auto'>
            {/* sort part */}
            <div className="dropdown">
                <div tabIndex={0} role="button"  className="btn m-1">Sort By <FaChevronDown/>  </div>
                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <button onClick={()=>handleSort('ascending-name')}><li><a>Ascending By Place Name </a></li></button>
                    <button onClick={()=>handleSort('descending')}><li><a>Descending</a></li></button>
                    <button onClick={()=>handleSort('average-cost')}><li><a>Average Cost</a></li></button>
                   
                </ul>
            </div>
            <h1 className='text-center md:text-6xl font-extrabold text-2xl mb-15 '>All tourist spots</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '>
                    {touristSpots.map(touristSpot=> <TouristSpot touristSpot={touristSpot} key={touristSpot._id}></TouristSpot>)}
            </div>
        </div>
        </div>
    );
};

export default TouristSpots;