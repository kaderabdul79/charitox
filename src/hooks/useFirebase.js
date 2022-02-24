import React, { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, onAuthStateChanged } from "firebase/auth";
import initializeFirebase from '../Firebase/firebase.init';

initializeFirebase();

const useFirebase = () => {
    const [user,setUser] = useState({})
    const [error,setError] = useState({})

    const auth = getAuth();
    const googleprovider = new GoogleAuthProvider();
    const githubprovider = new GithubAuthProvider();

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

    //Authenticate Using Github Sign-In
    const usingGithubSignin = () => {
        signInWithPopup(auth, githubprovider)
        .then((result) => {
            const user = result.user;
            setUser(user)
            console.log(user)
        }).catch((error) => {
            const email = error.email;
            setUser(error.message)
            console.log(email)
        });

    }

    // Get the currently signed-in user
    useEffect(()=>{
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            } else {
              // User is signed out
              setUser({})
            }
          });
          return () => unsubscribed;
    },[])

    return {
        usingGoogleSignin,usingGithubSignin
    };
};

export default useFirebase;