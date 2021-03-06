import React, { useReducer } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import '../styles/Nav.css';

const Nav = () => {
    const {user,logOut} = useAuth()
    return (
        <div className='nav-area'>
            <div className="header-nav">
            <div className="logo"><h2>charitox</h2></div>
            {/* list item start */}
            <div className="nav-list-item">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/events">events</Link></li>
                    <li><Link to="/news">News</Link></li>
                    {
                        user.email ? <li><Link to="/donates">Who_Donated</Link></li>
                        : <li></li>
                    }
                    {
                        user.email ? <li><Link onClick={logOut}>Logout</Link></li>
                        : <li><Link to="/login">Login</Link></li>
                    }
                    <li><Link to="/donate" className='btn-donate'>Donate Us</Link></li>
                </ul>
            </div>
             {/* list item end */}
             </div>  
        </div>
    );
};

export default Nav;