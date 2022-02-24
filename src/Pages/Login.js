import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../hooks/useFirebase';
import '../styles/Login.css';

const Login = () => {
    const {usingGoogleSignin, usingGithubSignin} = useFirebase()
    //console.log(usingGoogleSignin)
    const GoogleSignin = () => {
        usingGoogleSignin()
    }
    const GithubSignin = () => {
        usingGithubSignin()
    }
    const handleSignin = (e) => {
        e.preventDefault();
    }
    return (
        <div className='formlogin'>
            <div className="loginform">
                <div className="login">Login Form</div>
                <form className="form">
                    <div className='email'><input type="email" name="email" placeholder='enter email'></input></div>
                    <div className='password'><input type="password" name="password" placeholder='enter password'></input></div>
                    <Link to="/forgot">Forgot Password</Link>
                    <div className="submit"><input onClick={handleSignin} type="submit" name="Login" /></div>
                </form>
                    Have no Account ? <Link to="/signup">Signup Now</Link>
                <div className="provider">
                    <button className='google' onClick={GoogleSignin} >Connect with Google</button>
                    <button className='github' onClick={GithubSignin}>Connect with Github</button>
                </div>
            </div>
        </div>
    );
};

export default Login;