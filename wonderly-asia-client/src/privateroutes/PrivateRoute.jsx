import React, { useContext } from 'react';
import AuthContext from '../provider/AuthContext';
import { Form, Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user, loading}= useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <div className='flex justify-center items-center mt-15'>
            <span className=" loading loading-dots loading-xl"></span>
        </div>
    }
    if(user){
        return children
    }
    return (
       <Navigate to='/login' state={{from: location.pathname }}></Navigate>
    );
};

export default PrivateRoute;