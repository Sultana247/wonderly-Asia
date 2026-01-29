import React, { useContext } from 'react';
import { Link } from 'react-router';
import AuthContext from '../provider/AuthContext';
const Countries = ({country}) => {
    const {lightTheme}= useContext(AuthContext);
    console.log(country);
    const {_id, countryName, image, description}= country;
    return (
       <Link  to={`/tourist-spots/countrybased/${_id}`}>
        < div className={lightTheme ? 'w-96 h-96 rounded-2xl shadow-sm  flex flex-col justify-center items-center p-5': 'border-4  border-white w-96 h-96 rounded-2xl shadow-amber-200  flex flex-col justify-center items-center p-5'}>
           
            <img src={image} alt="" className='rounded-2xl mt-3 mb-3 h-60'/>
            
            <div className=' rounded-2xl  flex flex-col justify-center items-center gap-4 text-center '>
                <div className=' rounded-lg p-2  hover: '>
                    <h3 className='text-3xl font-bold mb-2'>{countryName}</h3>
                    <p className='text-[12px] mb-2'>{description}</p>
               
                </div>
            </div>
            
        </div></Link>
    );
};

export default Countries;