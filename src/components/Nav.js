import React from 'react';
import '../styles/Nav.css';

const Nav = () => {
    return (
        <div className='nav-area'>
            <nav>
                <div className="logo"><h2>charitox</h2></div>
                <div className="topnav">
                    <ul>
                        <li><a href="">987-098-098-09</a></li>
                        <li><a href="">info@webmail.com</a></li>
                        <li><a href="" className='btn-yellow'>Donate Us</a></li>
                    </ul>
                </div>
                <div className="bttmnav">
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Causes</a></li>
                        <li><a href="">Pages</a></li>
                        <li><a href="">News</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Nav;