import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import '../styles/DonateForm.css';

const DonateForm = () => {
    const [donateInfo,setdonateInfo] = useState({})
    // const {usingGoogleSignin, usingGithubSignin, user, error,userdonate} = useAuth()

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newdonateInfo = { ...donateInfo };
        newdonateInfo[field] = value;
        // console.log(field,value,donateInfo);
        setdonateInfo(newdonateInfo);
    }


    const handleSigninForm = (e) => {
        // console.log(donateInfo);
        // userdonate(donateInfo.email,donateInfo.password,location,history)
        
        e.preventDefault();
    }
    return (
        <div>
            <div className="formdonate">
                <div className="donateform">
                <form className="form" onSubmit={handleSigninForm}>
                    <div className='email'><input onChange={handleOnChange} type="email" name="email" placeholder='enter email'></input></div>
                    <div className='password'><input onChange={handleOnChange} type="password" name="password" placeholder='enter password'></input></div>
                    <div className="submit"><input onClick={handleSigninForm} type="submit" value="Donate" name="donate" /></div>
                </form>
                </div>
                {/* <div className="provider">
                    <button className='google' onClick={GoogleSignin} >Connect with Google</button>
                    <button className='github' onClick={GithubSignin}>Connect with Github</button>
                </div> */}
            </div>
        </div>
    );
};

export default DonateForm;