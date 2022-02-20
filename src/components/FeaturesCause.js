import React from 'react';
import Title from '../elements/Title';
import '../styles/FeaturesCause.css';
import cause1 from '../images/a8.jpg';

const FeaturesCause = () => {
    return (
        <div>
            <Title></Title>
            <div className="trending-cause">
                <div className="cause">
                    <img src={cause1} alt="" />
                    <div className="author">
                        <span>Health</span>
                        <span>By Abdul K.</span>
                    </div>
                    <h2 class="causetitle">People Health Response And Village Mans</h2>
                    <div className="goal">
                        <span><b>15%</b>Raised</span>
                        <span><b>7000</b>Goal</span>
                    </div>
                </div>
                <div className="cause">
                    <img src={cause1} alt="" />
                    <div className="author">
                        <span>Health</span>
                        <span>By Abdul K.</span>
                    </div>
                    <h3>People Health Response And Village Mans</h3>
                    <div className="goal">
                        <span><b>15%</b>Raised</span>
                        <span><b>7000</b>Goal</span>
                    </div>
                </div>
                <div className="cause">
                    <img src={cause1} alt="" />
                    <div className="author">
                        <span>Health</span>
                        <span>By Abdul K.</span>
                    </div>
                    <h3>People Health Response And Village Mans</h3>
                    <div className="goal">
                        <span><b>15%</b>Raised</span>
                        <span><b>7000</b>Goal</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturesCause;