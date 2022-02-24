import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import '../styles/Login.css';

const Login = () => {
    const [loginInfo,setLoginInfo] = useState({})
    const {usingGoogleSignin, usingGithubSignin, user, error} = useAuth()

    //console.log(usingGoogleSignin)
    const GoogleSignin = () => {
        usingGoogleSignin()
    }
    const GithubSignin = () => {
        usingGithubSignin()
    }

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newloginInfo = { ...loginInfo };
        newloginInfo[field] = value;
        // console.log(field,value,loginInfo);
        setLoginInfo(newloginInfo);
    }
    
    const handleSigninForm = (e) => {
        console.log(loginInfo);
        
        e.preventDefault();
    }
    return (
        <div className='formlogin'>
            <div className="loginform">
                <div className="login">Login Form</div>
                <form className="form" onSubmit={handleSigninForm}>
                    <div className='email'><input onChange={handleOnChange} type="email" name="email" placeholder='enter email'></input></div>
                    <div className='password'><input onChange={handleOnChange} type="password" name="password" placeholder='enter password'></input></div>
                    <Link to="/forgot">Forgot Password</Link>
                    <div className="submit"><input onClick={handleSigninForm} type="submit" name="Login" /></div>
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