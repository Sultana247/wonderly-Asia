import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
const AddTouristSpot = () => {
    const handleAddTouristSpot = (e) => {
        e.preventDefault();
        const form = e.target;
        const touristSpotName = form.touristSpotName.value;
        const countryName = form.countryName.value;
        const location = form.location.value;
        const description = form.description.value;
        const cost = form.cost.value;
        const season = form.season.value;
        const travelTime = form.travelTime.value;
        const visitors = form.visitors.value;
        const email = form.email.value;
        const name = form.name.value;
        const image = form.image.value;
        const newSpot = { touristSpotName, countryName, location, description, cost, season, travelTime, visitors, email, name, image }

        // database part
        fetch('https://wanderly-asia-server.vercel.app/touristSpots', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newSpot)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success("New Tourist Spots Added Successfully!");
                    e.target.reset();
                }
            })
    }
    return (
        <div className='bg-orange-50 p-45 '>
            <div className='mt-10 max-w-5xl mx-auto'>
                <h1 className='text-center text-3xl font-extrabold mb-10'>Add Tourists Spots</h1>
                <form onSubmit={handleAddTouristSpot} className='  '>
                    <div className='flex  gap-10 '>

                        <fieldset className="  w-1/2">
                            <legend className="fieldset-legend text-lg">Tourists Spot Name</legend>
                            <input name='touristSpotName' type="text" className="input w-full" placeholder="Enter Tourist Spots Name here" />
                        </fieldset>
                        <fieldset className=" w-1/2">
                            <legend className="fieldset-legend text-lg">Country Name</legend>
                            <input name='countryName' type="text" className="input w-full" placeholder="Enter country name" />
                        </fieldset>
                    </div>
                    <div className='flex  gap-10 '>

                        <fieldset className="  w-1/2">
                            <legend className="fieldset-legend text-lg">Location</legend>
                            <input name='location' type="text" className="input w-full" placeholder="Enter location here" />
                        </fieldset>
                        <fieldset className=" w-1/2">
                            <legend className="fieldset-legend text-lg">Short Description</legend>
                            <input name='description' type="text" className="input w-full" placeholder="Enter description here" />
                        </fieldset>
                    </div>
                    <div className='flex  gap-10 '>

                        <fieldset className="  w-1/2">
                            <legend className="fieldset-legend text-lg">Average Cost</legend>
                            <input name='cost' type="text" className="input w-full" placeholder="Enter average cost here" />
                        </fieldset>
                        <fieldset className=" w-1/2">
                            <legend className="fieldset-legend text-lg">Seasonality</legend>
                            <input name='season' type="text" className="input w-full" placeholder="Enter seasonality like summer, winter here" />
                        </fieldset>
                    </div>
                    <div className='flex  gap-10 '>

                        <fieldset className="  w-1/2">
                            <legend className="fieldset-legend text-lg">Travel Time</legend>
                            <input name='travelTime' type="text" className="input w-full" placeholder="Enter estimated travel time here" />
                        </fieldset>
                        <fieldset className=" w-1/2">
                            <legend className="fieldset-legend text-lg">Total Visitors</legend>
                            <input name='visitors' type="text" className="input w-full" placeholder="Enter total visitors per year here" />
                        </fieldset>
                    </div>
                    <div className='flex  gap-10 '>
                        <fieldset className=" w-1/2">
                            <legend className="fieldset-legend text-lg">User Email</legend>
                            <input name='email' type="text" className="input w-full" placeholder="Enter user email here" />
                        </fieldset>
                        <fieldset className="  w-1/2">
                            <legend className="fieldset-legend text-lg">User Name</legend>
                            <input name='name' type="text" className="input w-full" placeholder="Enter user name here" />
                        </fieldset>
                    </div>
                    <div className='flex  gap-10 '>
                        <fieldset className=" w-full">
                            <legend className="fieldset-legend text-lg">Image</legend>
                            <input name='image' type="text" className="input w-full" placeholder="Enter the tourist place image" />
                        </fieldset>

                    </div>
                    <button className='w-full bg-orange-400 rounded-lg py-2 text-center text-xl font-bold text-white mt-5'>Add</button>
                    <ToastContainer />
                </form>

            </div>

        </div>
    );
};

export default AddTouristSpot;