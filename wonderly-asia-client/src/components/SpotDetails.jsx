import React from 'react';
import { AiFillDollarCircle } from 'react-icons/ai';
import { FaClock, FaLocationDot } from 'react-icons/fa6';
import { IoPeopleCircle } from 'react-icons/io5';
import { TiWeatherPartlySunny } from 'react-icons/ti';
import { useLoaderData } from 'react-router';

const SpotDetails = () => {
    const spot = useLoaderData();
    console.log(spot);
     const {_id, touristSpotName, countryName, location, description, name, email, image, season, travelTime, cost, visitors} = spot;

    return (
        <div className='bg-orange-50 py-65'>
            <div className='max-w-5xl mx-auto'>
                <h2 className='md:text-5xl text-center text-xl font-bold mb-10'>Welcome to {touristSpotName}</h2>

                <div className='flex gap-6'>
                    <img src={image} alt="" className='w-2/3 rounded-lg' />

                    <div className='bg-white rounded-lg p-5 w-1/2 '>
                        <p className='mt-5'>{description}</p>
                        <div className='text-xl flex flex-col justify-center p-10 gap-3'>
                         
                             <div className='flex gap-2 items-center'>
                            <FaLocationDot/>
                            <p className=''>{countryName}, {location}</p>
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
                            
                        
                            <div className='flex gap-2 items-center text-[12px]'>
                                
                                <p>Added By {name} & {email}</p>
                            </div>

                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpotDetails;