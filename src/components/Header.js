import React from 'react';
import '../styles/Header.css';
import backgroundImg from '../images/background.jpg';

const Header = () => {
    return (
        <div className="header-area">
            <div className="header">
                <img src={backgroundImg} alt="" />
                <div className="header-desc container">
                    <h3>our mission: food,education,medicing</h3>
                    <h2>we're on a mission to change that</h2>
                    <div className="btn">
                        <div className="btn-yellow"><a href="">view events</a></div>
                        <div className="btn-white"><a href="">Donate now</a></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;