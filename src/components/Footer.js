import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <div className='footer-area'>
            <div className="footer">
            © FundBux Charity Trust - {(new Date().getFullYear())}. All rights reserved.    
            </div>
        </div>
    );
};

export default Footer;