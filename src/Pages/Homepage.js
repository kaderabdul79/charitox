import React from 'react';
import Events from '../components/Events';
import FeaturesCause from '../components/FeaturesCause';
import NewsFeeds from '../components/NewsFeeds';

const Homepage = () => {
    return (
        <div>
            <FeaturesCause></FeaturesCause>
            <Events></Events>
            <NewsFeeds></NewsFeeds>
        </div>
    );
};

export default Homepage;