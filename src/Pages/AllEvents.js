import React from 'react';
import Events from '../components/Events';
import Footer from '../components/Footer';
import Nav from '../components/Nav';

const AllEvents = () => {
    return (
        <div>
            <Nav></Nav>
            <Events></Events>
            <Footer></Footer>
        </div>
    );
};

export default AllEvents;