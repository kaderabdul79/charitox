import React from 'react';
import '../styles/Event.css';
import eventbanner from '../images/eventbanner.jpg';
import Card from '../elements/Card';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Nav from '../components/Nav';

const Event = () => {
    return (
        <div className='event-area'>
            <Nav></Nav>
            <div className="event-banner">
                <img src={eventbanner} alt="" />
                <div className="event-title">
                    <p>Our Mission: Food, Education, Medicine</p>
                    <h2>Event Details</h2> 
                </div>
            </div>
            <div className="booking">
                <div className="booking-form">
                    <div className="login">Book for Event</div>
                    <form class="form">
                        <div className='email'><input type="email" name="email" value="" placeholder='enter email'></input></div>
                        <div className='password'><input type="password" name="password" value="" placeholder='enter password'></input></div>
                        <div className="submit"><input type="submit" value="Book Seat" /></div>
                    </form>
                    <p>Among the major reasons why Python is “slow”, it really boils down to 2 — Python is interpreted as opposed to compiled, ultimately leading to slower execution times; and the fact that it is dynamically typed (data types of variables are automatically inferred by Python during execution). Take, for example, TensorFlow, a Machine Learning library available in Python. These libraries were actually written in C++ and made available in Python, sort of forming a Python “wrapper” around the C++ implementation. The same goes for Numpy and, to an extent, even Caer. One of the major reasons for Python’s slowness is the presence of GIL (Global Interpreter Lock) which allows only one thread to execute at a time. While this boosts the performance of single threading</p>
                </div>
                <div className="booking-details">
                    <Card title="Event Details"></Card>
                    <Card title="Special Guest"></Card>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Event;