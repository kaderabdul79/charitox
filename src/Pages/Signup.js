import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Login.css';

const Signup = () => {
    return (
        <div className='formlogin'>
            <div className="loginform">
                <div className="login">Signup</div>
                <form class="form">
                    <div className='email'><input type="email" name="email" value="" placeholder='enter email'></input></div>
                    <div className='password'><input type="password" name="password" value="" placeholder='enter password'></input></div>
                    <div className='password'><input type="password" name="repassword" value="" placeholder='Retype password'></input></div>
                    <div className='name'><input type="text" name="name" value="" placeholder='Enter name'></input></div>
                    <Link to="/forgot">Forgot Password</Link>
                    <div className="submit"><input type="submit" value="Signup" /></div>
                </form>
                Already Have an Account? <Link to="/login">Login</Link>
            </div>
        </div>
    );
};

export default Signup;