import React from 'react';
import '../styles/Booking.css';
import eventbanner from '../images/eventbanner.jpg';
import Card from '../elements/Card';

const Booking = () => {
    return (
        <div className='booking-area'>
            <div className="event-banner">
                <img src={eventbanner} alt="" />
                <div className="event-title">
                    <p>Our Mission: Food, Education, Medicine</p>
                    <h2>Event Details</h2> 
                </div>
            </div>
            <div className="booking">
                <div className="booking-form">

                </div>
                <div className="booking-details">
                    
                </div>
            </div>
        </div>
    );
};

export default Booking;