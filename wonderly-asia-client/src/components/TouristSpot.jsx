import React, { useContext } from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { AiFillDollarCircle } from "react-icons/ai";
import { Link } from 'react-router';
import { IoPeopleCircle } from "react-icons/io5";
import { FaClock } from "react-icons/fa6";
import { TiWeatherPartlySunny } from "react-icons/ti";
import AuthContext from '../provider/AuthContext';

const TouristSpot = ({touristSpot}) => {
    const {lightTheme}=useContext(AuthContext);
    console.log(touristSpot)
    const {_id, touristSpotName, countryName, image, season, travelTime, cost, visitors} = touristSpot;
    return (
        < div className={'w-96 rounded-2xl shadow-sm border-2 border-white image-full flex flex-col justify-center items-center'}>
           
            <img src={image} alt="" className={lightTheme ? 'rounded-2xl h-100  ': 'rounded-2xl h-100 border-2 border-white  '}/>
            
            <div className='absolute w-96 h-100 rounded-2xl border-2 border-white bg-linear-to-r from-[#00001A] to-[#F0F0F026] flex flex-col justify-center items-center gap-4 text-center '>
                <div className='text-white rounded-lg p-2  hover: '>
                    <h3 className='text-3xl font-bold mb-2'>{touristSpotName}</h3>
                <div className='flex gap-2 items-center'>
                    <FaLocationDot/>
                    <p className=''>{countryName}</p>
                </div>
                
                 <div className='flex gap-2 items-center'>
                    <AiFillDollarCircle/>
                    <p>{cost}</p>
                </div>
                 <div className='flex gap-2 items-center'>
                    <IoPeopleCircle/>
                    <p>{visitors}</p>
                </div>
                 <div className='flex gap-2 items-center'>
                    <FaClock/>
                    <p>{travelTime}</p>
                </div>
                 <div className='flex gap-2 items-center'>
                    <TiWeatherPartlySunny/>
                    <p>{season}</p>
                </div>
                </div>
                <Link to={`/spot-details/${_id}`}><button className='bg-orange-400 rounded-sm p-3 font-bold hover:border hover:border-black hover:bg-white hover:text-black text-white text-center '>View details</button></Link>
            </div>
            
        </div>
    );
};

export default TouristSpot;