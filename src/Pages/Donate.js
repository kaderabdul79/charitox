import React from 'react';
import DonateForm from '../components/DonateForm';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import Title from '../elements/Title';

const Donate = () => {
    return (
        <div>
            <Nav></Nav>
            <Title title="" highlights="" toptitle="Poor people need your help" bigtitle="Donate Us"></Title>
            <DonateForm></DonateForm>
            <Footer></Footer>
        </div>
    );
};

export default Donate;