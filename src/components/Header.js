import React from 'react';
import '../styles/Header.css';
import backgroundImg from '../images/background.jpg';
import Nav from './Nav';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header-area">
            <Nav></Nav>
            <div className="header">
                <img src={backgroundImg} alt="" />
                <div className="header-desc container">
                    <h3>our mission: food,education,medicing</h3>
                    <h2>we're on a mission to change that</h2>
                    <div className="btn">
                        <div className="btn-yellow"><Link to="">view events</Link></div>
                        <div className="btn-white"><Link to="">Donate now</Link></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;