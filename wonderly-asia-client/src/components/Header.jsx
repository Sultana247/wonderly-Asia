import React, { useContext } from 'react';
import { NavLink } from 'react-router';
import "./header.css"
import AuthContext from '../provider/AuthContext';
import { FaUserLock } from "react-icons/fa";

const Header = () => {
    const {user, logout}= useContext(AuthContext);
    const navitems = 
    <>
    <NavLink to="/" className={'btn navbar-items'}>Home</NavLink>
    <NavLink to="/tourist-spots" className={'btn navbar-items'}>All Tourist Spot</NavLink>
    <NavLink to="/add-tourist-spots" className={'btn navbar-items'}>Add Tourist Spot</NavLink>
    <NavLink to="/mylist" className={'btn navbar-items'}>My List</NavLink>
   
    </>
    // logout
    const handleLogout =()=>{
        logout()
        .then(data=>{
            console.log("user logged out", data);
        })
        .catch(error=>{
            console.log(error.message)
        })
    }
    return (
        <div className='bg-base-100'>
            <div className="navbar  max-w-7xl mx-auto p-5">
                
                        <div className="navbar-start">
                        <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow flex gap-6">
                            {navitems}
                        </ul>
                        </div>
                        <a className=" text-2xl md:text-5xl font-bold">WonderlyAsia</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 flex gap-6">
                        {navitems}
                        </ul>
                    </div>
                    <div className="navbar-end flex gap-2">
                         {user ? 
                         <>
                         <div className='flex gap-4'>
                            <div className=''>
                                {user.photoURL ? <img src={user.photoURL} alt="" className='rounded-full size-9 border border-black photo'/> : <img src='https://i.ibb.co.com/rnDNGgf/5907.jpg' alt="" className='size-9 rounded-full photo border border-black'/>}
                            <p className='hide absolute px-2 rounded-lg bg-black text-white'>{user?.displayName? user?.displayName : user?.reloadUserInfo?.screenName}</p>
                            </div>
                            <button onClick={handleLogout} className='btn navbar-items'>Logout</button>
                         </div>
                         </> : 
                         <>
                         <NavLink to="/login" className={'btn navbar-items'}>Login</NavLink>
                        <NavLink to="/register" className={'btn navbar-items'}>Register</NavLink>
                         </>}
                    </div>
            
            </div>
        </div>
    );
};

export default Header;