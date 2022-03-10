import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    const NotFound = {
        backgroundColor: '#efc963',
        height: '100vh',
        textAlign: 'center'
    }
    return (
        <div className='notfound-area'>
            <div className="NotFound" style={NotFound}>
                <h2 style={{color: '#fff',fontSize: '60px',margin: '30px 0px',textAlign: 'center'}}>404</h2>
                <Link style={{color: '#000',fontSize: '18px',textAlign: 'center'}} to="/">Home</Link>
            </div>
        </div>
    );
};

export default NotFound;