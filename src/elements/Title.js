import React from 'react';
import './Title.css';

const Title = ({toptitle,bigtitle,highlights,children}) => {
    return (
        <div className='title-area'>
            <div className="title">
                <h4>{toptitle}</h4>
                <h2>{bigtitle}<br /><span>{highlights}</span>{children}</h2>
            </div>
        </div>
    );
};

export default Title;