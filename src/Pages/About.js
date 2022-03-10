import React from 'react';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import '../styles/About.css';

const About = () => {
    return (
        <div className=''>
            <Nav></Nav>
            <div className="abt-area">
            <div className="about-content">
                <div className="abt-text">
                    <h2>What we think about our charity</h2>
                    <p>The first promise we made is a promise we still keep today: 100% of all public donations bring clean water to people in need.Transparency is one of our core values, so along with using every penny you donate to fund clean water projects, we also prove each project with photos and GPS coordinates.The first promise we made is a promise we still keep today: 100% of all public donations bring clean water to people in need. Transparency is one of our core values, so along with using every penny you donate to fund clean water projects, we also prove each project with photos and GPS coordinates.</p>
                </div>
                <div className="abt-img">
                    <img src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=431&q=80" alt="charity about img" />
                </div>
            </div>
            <div className="box-wrapper">
                <div className="box item-1"><span>3</span><h3>Years In Charity</h3></div>
                <div className="box item-2"><span>85</span><h3>Staff Memebers</h3></div>
                <div className="box item-3"><span>8</span><h3>Work on Conturies</h3></div>
                <div className="box item-4"><span>13M</span><h3>Helping people</h3></div>
            </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;