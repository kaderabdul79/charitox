import React from 'react';
import '../styles/NewsFeeds.css';
import bigFeatures from '../images/a4.jpg';
import Title from '../elements/Title';

const NewsFeeds = () => {
    return (
        <div className='newsfeeds'>
            <Title toptitle="Trending News" bigtitle="News Feeds"></Title>
            <div className="news">
                <div className="big-features">
                    <img src={bigFeatures} alt="" />
                    <div className="authortag">
                        <div className="author">
                            <i class="fal fa-user"></i>
                            <span>By Salman Ahmed</span>
                        </div>
                        <div className="tag">
                            <i class="fal fa-tags"></i>
                            <span>Charity Fundrise</span>
                        </div>
                    </div>    
                        <h3>Many of us have no idea what it's like</h3>
                        <p>Sharksucker sea toad candiru rocket danio tilefish stingray deepwater stingray Sacramento splittail canthigaster rostrata. Midshipman dartfish Modoc sucker, yellowtail. Phasellus mattis bibendum augue, sit amet egesta</p>
                </div>
                <div className="shortnews">
                    <div className="newsdate">21 Feb</div>
                    <div className="authortag">
                        <div className="author">
                            <i class="fal fa-user"></i>
                            <span>By Salman Ahmed</span>
                        </div>
                        <div className="tag">
                            <i class="fal fa-tags"></i>
                            <span>Charity Fundrise</span>
                        </div>
                    </div>
                    <div className="news-desc">
                    <h3>Many of us have no idea what it's like</h3>
                    <p>Sharksucker sea toad candiru rocket danio tilefish stingray deepwater stingray Sacramento splittail canthigaster rostrata. Midshipman dartfish Modoc sucker, yellowtail. Phasellus mattis bibendum augue, sit amet egesta</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsFeeds;