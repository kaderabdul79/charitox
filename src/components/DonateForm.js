import React, { useState } from 'react';
import '../styles/DonateForm.css';

const DonateForm = () => {
    const [donateInfo,setdonateInfo] = useState({})
    const [success,setSuccess] = useState("")

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newdonateInfo = { ...donateInfo };
        newdonateInfo[field] = value;
        // console.log(field,value,donateInfo);
        setdonateInfo(newdonateInfo);
    }


    const handleSigninForm = (e) => {
        const donateData = {...donateInfo}
        // console.log(donateData)
        // 
        fetch('https://protected-mesa-61574.herokuapp.com/donates', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(donateData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess('Successfully Donated to Us,Thanks!.')
                    setdonateInfo("")
                }
            })
        // 
        e.preventDefault();
    }
    return (
        <div>
            <div className="formdonate">
                <div className="donateform">
                <form className="form" onSubmit={handleSigninForm}>
                    <div className='email'><input onChange={handleOnChange} type="email" name="email" placeholder='enter email'></input></div>
                    <div className='text'><input onChange={handleOnChange} type="text" name="name" placeholder='enter name'></input></div>
                    <div className='text'><input onChange={handleOnChange} type="text" name="city" placeholder='enter city'></input></div>
                    <div className='amount'><input onChange={handleOnChange} type="text" name="amount" placeholder='enter donating amount'></input></div>
                    <div className='phn'><input onChange={handleOnChange} type="text" name="phone" placeholder='enter phone'></input></div>
                    <div className="submit"><input onClick={handleSigninForm} type="submit" value="Donate" name="donate" /></div>
                </form>
                {success ? <h4>{success}</h4> : ""}
                </div>
            </div>
        </div>
    );
};

export default DonateForm;