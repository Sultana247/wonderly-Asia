import React, { Children, useState } from 'react';
import AuthContext from './AuthContext';

const AuthProvider = ({Children}) => {
    const [user, setUser]=useState([]);
    const authinfo ={
        user
    }
    return (
       <AuthContext.Provider value={authinfo}>
        {Children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;