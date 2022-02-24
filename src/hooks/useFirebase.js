import React, { useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


const useFirebase = () => {
    const [user,setUser] = useState({})
    const [error,setError] = useState({})

    const auth = getAuth();
    const googleprovider = new GoogleAuthProvider();
    
    //Authenticate Using Google Sign-In
    const usingGoogleSignin = () => {
        signInWithPopup(auth, googleprovider)
        .then((result) => {
            const user = result.user;
            console.log(user)
        }).catch((error) => {
            const email = error.email;
            console.log(email)
        });

    }

    return {
        usingGoogleSignin
    };
};

export default useFirebase;