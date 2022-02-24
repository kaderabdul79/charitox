import React from 'react';
import './Card.css';

const Card = ({title}) => {
    return (
        <div className='card-area'>
            <h2>{title}</h2>
            <div className="card">
                <div className="details">
                    <p>12/A, Miranda Halim City Town Hall, NYC</p>
                    <p>info@webmail.com</p>
                    <p>908-098-098-09</p>
                </div>
            </div>
        </div>
    );
};

export default Card;