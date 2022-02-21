import React from 'react';
import '../styles/Events.css';
import event1 from '../images/a6.jpg';
import Title from '../elements/Title';

const Events = () => {
    return (
        <div className='events-area'>
            <Title toptitle="Ongoing Events" bigtitle="Join Us"></Title>
            <div className="events">
                <div className="eventImg">
                    <img src={event1} alt="" />
                    <div className="date-place">
                        <div className="date">24th June 2022</div>
                        <div className="place">Dhaka,Uttara</div>
                    </div>
                </div>
                <div className="eventInfo">
                    <h2>Project Management In The Voluntary Sector</h2>
                    <p>Your $40.00 monthly donation can give 12 people clean water every year. 100% funds water projects.</p>
                    <li>A place in history</li>
                    <li>It’s about impact, goodness</li>
                    <li>More goodness in the world</li>
                    <li>The world we live</li>
                </div>
                <div className="eventBtn">
                    <a href="">Book A Seat</a>
                </div>
            </div>            <div className="events">
                <div className="eventImg">
                    <img src={event1} alt="" />
                    <div className="date-place">
                        <div className="date">24th June 2022</div>
                        <div className="place">Dhaka,Uttara</div>
                    </div>
                </div>
                <div className="eventInfo">
                    <h2>Project Management In The Voluntary Sector</h2>
                    <p>Your $40.00 monthly donation can give 12 people clean water every year. 100% funds water projects.</p>
                    <li>A place in history</li>
                    <li>It’s about impact, goodness</li>
                    <li>More goodness in the world</li>
                    <li>The world we live</li>
                </div>
                <div className="eventBtn">
                    <a href="">Book A Seat</a>
                </div>
            </div>
        </div>
    );
};

export default Events;