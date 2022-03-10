import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import '../styles/ShowDonatesData.css';

const ShowDonatesData = () => {

    const [donates,setDonates] = useState([])
    // get all data who donated to us using api named donates
    useEffect(()=>{
        fetch('http://localhost:5000/donates', {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data.donates)
                setDonates(data)
            })
    },[])

    return (
        <div>
            <Nav></Nav>
            <div className="donate-area">
                <table id="donates">
                <tr>
                    <th>Email</th>
                    <th>Name</th>
                    <th>City</th>
                    <th>Donated Amount</th>
                    <th>Phone</th>
                </tr>
                <tr>
                    {
                        donates.map(donate => (
                            // console.log(donate)
                            <>
                            <td>{donate.email}</td>
                            <td>{donate.name}</td>
                            <td>{donate.city}</td>
                            <td>${donate.amount}</td>
                            <td>{donate.phone}</td>
                            </>
                        ))
                    }

                </tr>
                </table>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ShowDonatesData;