import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../provider/AuthContext';
import { Link } from 'react-router';
import Swal from 'sweetalert2'

const MyList = () => {
    const [list, setList]=useState([])
    const {user}= useContext(AuthContext)
    const email = user.email;
    const handleDelete=(id)=>{
        Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
        }).then((result) => {
        if (result.isConfirmed) {
            // database deletion part
            fetch(`https://wanderly-asia-server.vercel.app/touristSpots/${id}`, {
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount > 0){
            Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
            });
            const remaining = list.filter(remainingList=>remainingList._id !== id);
            setList(remaining);
            }
        });
            
        }
        });
        
    }

    useEffect(()=>{
        fetch(`https://wanderly-asia-server.vercel.app/touristSpots/email/${email}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setList(data)
        })
    },[])
    return (
        <div className='bg-orange-50 py-65'>
            <h1 className='md:text-5xl text-xl text-center font-bold mb-10'>My Tourists Spots</h1>
           <div className="overflow-x-auto max-w-5xl mx-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr className='font-bold text-xl'>
                        <th></th>
                        <th>Spot Name</th>
                        <th>Location</th>
                        <th>Country Name</th>
                        <th></th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}
                    {list.map((mylist, index)=><tr key={mylist._id} className='text-lg'>
                        <th>{index + 1}</th>
                        <td>{mylist.touristSpotName}</td>
                        <td>{mylist.location}</td>
                        <td>{mylist.countryName}</td>
                        <td><Link to={`/updateTouristSpots/${mylist._id}`}><button className='btn btn-outline btn-warning'>Update</button></Link></td>
                        <td><button onClick={()=>handleDelete(mylist._id)} className='btn btn-dash btn-error'>Delete X</button></td>
                    </tr>)}
                   
                    </tbody>
                </table>
                </div>
        </div>
    );
};

export default MyList;