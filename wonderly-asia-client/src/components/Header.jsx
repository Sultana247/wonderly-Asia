import React, { useContext } from 'react';
import { NavLink } from 'react-router';
import "./header.css"
import AuthContext from '../provider/AuthContext';
import { FaUserLock } from "react-icons/fa";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";

const Header = () => {
    const {lightTheme, setLightTheme} = useContext(AuthContext)
    const handleTheme =()=>{
       setLightTheme(!lightTheme);
    }
    const {user, logout}= useContext(AuthContext);
    const navitems = 
    <>
    <NavLink to="/" className={' navbar-items'}>Home</NavLink>
    <NavLink to="/tourist-spots" className={' navbar-items'}>All Tourist Spot</NavLink>
    <NavLink to="/add-tourist-spots" className={'navbar-items'}>Add Tourist Spot</NavLink>
    <NavLink to="/mylist" className={'navbar-items'}>My List</NavLink>
   
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
        <div className=' '>
            <div className='relative '>
                <div className={lightTheme ? 'bg-white  fixed top-0 right-0 left-0 p-5 z-5' : 'bg-black text-white  fixed top-0 right-0 left-0 p-5 z-5'}>
                <div className= 'navbar max-w-7xl mx-auto   '>
                
                    
                        <div className="navbar-start">
                            <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex="-1"
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow flex text-black">
                                {navitems}
                            </ul>
                            </div>
                            <p className=" text-2xl md:text-5xl font-bold text-orange-400">WonderlyAsia</p>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 flex gap-6 ">
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
                            <button onClick={handleLogout} className={lightTheme ? 'btn navbar-items' : 'navbar-items text-white btn btn-neutral'}>Logout</button>
                         </div>
                         </> : 
                         <>
                         <NavLink to="/login" className={' navbar-items'}>Login</NavLink>
                        <NavLink to="/register" className={' navbar-items'}>Register</NavLink>
                         </>}
                        <div className={lightTheme ? 'text-black' : 'text-white'}>
                            <button onClick={handleTheme} className='ml-4  text-2xl'> {lightTheme ?<MdDarkMode></MdDarkMode>  : <MdOutlineLightMode />}</button>
                        </div>

                    </div>
                    
            
            </div>
                </div>
                
            </div>
        </div>
    );
};

export default Header;