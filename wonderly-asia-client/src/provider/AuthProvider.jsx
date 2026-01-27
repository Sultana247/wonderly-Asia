import React, {  useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import auth from '../firebase/firebase.config';

const AuthProvider = ({children}) => {
    const [user, setUser]=useState([]);
    const [loading, setLoading]=useState(true);
    // sing upwith email password
    const register =(email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // update profile
    const updateName=(name)=>{
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name
        });
    }
    // login with user and pass
    const login =(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    // sign in with google
    const signinwithPopup =(provider)=>{
        return signInWithPopup(auth, provider);
    }
    const logout =()=>{
        setLoading(true);
        return signOut(auth);
    }
    const authinfo ={
        user,
        login,
        updateName,
        register,
        loading,
        logout,
        signinwithPopup
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log('observing user', currentUser)
            setUser(currentUser);
            setLoading(false);

        });
        return ()=>{
            unsubscribe();
        }
    }, [])
    return (
       <AuthContext.Provider value={authinfo}>
            {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;