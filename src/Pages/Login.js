import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {
    return (
        <div className='formlogin'>
            <div className="loginform">
                <div className="login">Login Form</div>
                <form class="form">
                    <div className='email'><input type="email" name="email" value="" placeholder='enter email'></input></div>
                    <div className='password'><input type="password" name="password" value="" placeholder='enter password'></input></div>
                    <Link to="/forgot">Forgot Password</Link>
                    <div className="submit"><input type="submit" value="Login" /></div>
                </form>
                Have no Account ? <Link to="/signup">Signup Now</Link>
            </div>
        </div>
    );
};

export default Login;