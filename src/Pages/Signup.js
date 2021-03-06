import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import '../styles/Login.css';

const Signup = () => {
    const [signupInfo,setSignUpInfo] = useState({})
    const {user, error, userRegistration, isLoading} = useAuth()

    const history = useHistory()

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newsignupInfo = { ...signupInfo };
        newsignupInfo[field] = value;
        // console.log(field,value,signupInfo);
        setSignUpInfo(newsignupInfo);
    }
    
    const handleSignupForm = (e) => {
        // console.log(signupInfo);
        if(signupInfo.password !== signupInfo.repassword){
            alert("password doesn't match")
            return
        }
        userRegistration(signupInfo.email,signupInfo.password,signupInfo.name,history)
        e.preventDefault();
    }

    return (
        <div className='formlogin'>
            <div className="loginform">
                <div className="login">Signup</div>
                { !isLoading && 
                <form className="form" onSubmit={handleSignupForm}>
                    <div className='email'><input type="email" onChange={handleOnChange} name="email" placeholder='enter email'></input></div>
                    <div className='password'><input type="password" onChange={handleOnChange} name="password" placeholder='enter password'></input></div>
                    <div className='password'><input type="password" onChange={handleOnChange} name="repassword" placeholder='Retype password'></input></div>
                    <div className='name'><input type="text" onChange={handleOnChange} name="name" placeholder='Enter name'></input></div>
                    <Link to="/forgot">Forgot Password</Link>
                    <div className="submit"><input type="submit" value="Signup" /></div>
                </form>
                }
                { isLoading && <div><iframe src="https://giphy.com/embed/xTk9ZvMnbIiIew7IpW" width="380" height="300" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/loop-loading-loader-xTk9ZvMnbIiIew7IpW">Loading...</a></p></div>}
                { user?.email && <div>User Created Successfully</div> }
                { error ? <div>{error}</div> : <div></div> }
                Already Have an Account? <Link to="/login">Login</Link>
                {/* {user && <h3>{user?.displayName}</h3>} */}
            </div>
        </div>
    );
};

export default Signup;