import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
const AddCountry = () => {
    const handleAddCountries =(e)=>{
        e.preventDefault();
        const form = e.target;
        const countryName =form.countryName.value;
        const description =form.description.value;
        const image = form.image.value;
        const country = {countryName, description, image}
        console.log(country);
        fetch('http://localhost:5000/countries', {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(country)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                toast.success("country added");
                e.target.reset();
            }
        })
    }
    return (
        <div>
            <div className='bg-orange-50 p-45 '>
            <div className='mt-10 max-w-5xl mx-auto'>
                <h1 className='text-center text-3xl font-extrabold mb-10'>Add Countries</h1>
                <form onSubmit={handleAddCountries} className='  '>
                    <div className='flex  gap-10 '>
                        
                       <fieldset className=" w-full ">
                            <legend className="fieldset-legend text-lg">Country Name</legend>
                            <input name='countryName' type="text" className="input w-full" placeholder="Enter country Name here" />
                       </fieldset>
                      
                    </div>
                    <div className='flex  gap-10 '>
                        
                       <fieldset className="w-full">
                            <legend className="fieldset-legend text-lg">Short Description</legend>
                            <input name='description' type="text" className="input w-full" placeholder="Enter description here" />
                       </fieldset>
                    </div>
                   
                    <div className='flex  gap-10 '>
                        <fieldset className=" w-full">
                            <legend className="fieldset-legend text-lg">Image</legend>
                            <input name='image' type="text" className="input w-full" placeholder="Enter the tourist place image" />
                       </fieldset>
                       
                    </div>
                    <button className='w-full bg-orange-400 rounded-lg py-2 text-center text-xl font-bold text-white mt-5'>Add</button>
                    <ToastContainer/>
                </form>
   
            </div>
            
        </div>
        </div>
    );
};

export default AddCountry;