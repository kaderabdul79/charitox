import React, { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import initializeFirebase from '../Firebase/firebase.init';

initializeFirebase();

const useFirebase = () => {
    const [user,setUser] = useState({})
    const [error,setError] = useState({})
    const [isLoading,setIsLoading] = useState(true)

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

    //Create a password-based account register 
    const userRegistration = (email, password) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          setUser(user)
        })
        .catch((error) => {
          const errorMessage = error.message;
          setError(errorMessage)
        })
        .finally(() => {
            setIsLoading(false)
        });
    }

    // Sign in a user with an email address and password
    const userLogin = (email, password) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          setUser(user)
        })
        .catch((error) => {
          const errorMessage = error.message;
          setError(errorMessage)
        })
        .finally(() => {
            setIsLoading(false)
        });
    }

    // observer check state change or not
    useEffect(()=>{
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            } else {
              // User is signed out
              setUser({})
            }
            setIsLoading(false)
          });
          return () => unsubscribed;
    },[])

    // sign out user,
    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            setUser({})
          }).catch((error) => {
            setError(error.message)
        })
        .finally(() => {
            setIsLoading(false)
        });
    }

    return {
        usingGoogleSignin,usingGithubSignin,user,error,logOut,userRegistration,userLogin,isLoading
    };
};

export default useFirebase;