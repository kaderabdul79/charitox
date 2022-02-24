import React from 'react';
import '../styles/Event.css';
import eventbanner from '../images/eventbanner.jpg';
import Card from '../elements/Card';
import { Link } from 'react-router-dom';

const Event = () => {
    return (
        <div className='event-area'>
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
                </div>
                <div className="booking-details">
                    <Card title="Event Details"></Card>
                    <Card title="Special Guest"></Card>
                </div>
            </div>
        </div>
    );
};

export default Event;