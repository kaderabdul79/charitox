import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Nav.css';

const Nav = () => {
    return (
        <div className='nav-area'>
            <nav>
                <div className="logo"><h2>charitox</h2></div>
                <div className="topnav">
                    <ul>
                        <li><Link to="">987-098-098-09</Link></li>
                        <li><Link to="">info@webmail.com</Link></li>
                        <li><Link to="/donate" className='btn-yellow'>Donate Us</Link></li>
                    </ul>
                </div>
                <div className="bttmnav">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/events">events</Link></li>
                        <li><Link to="/pages">Pages</Link></li>
                        <li><Link to="/news">News</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Nav;