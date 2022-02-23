import React from 'react';
import '../styles/Login.css';

const Login = () => {
    return (
        <div className='formlogin'>
            <div className="loginform">
                <div className="login">Login Form</div>
                <form class="form">
                    <div className='email'><input type="email" name="email" value="" placeholder='enter email'></input></div>
                    <div className='password'><input type="password" name="password" value="" placeholder='enter password'></input></div>
                    <div className="submit"><input type="submit" value="Login" /></div>
                </form>
            </div>
        </div>
    );
};

export default Login;