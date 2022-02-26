import React from 'react';
import '../styles/News.css';
import Footer from '../components/Footer';
import Nav from '../components/Nav';

const News = () => {
    return (
        <div className='news-area'>
            <Nav></Nav>
            <div className="news-grid">
                <div className="news">
                    <img src="https://images.thedailystar.net/sites/default/files/styles/big_202/public/images/2022/02/24/download_2.jpg?itok=UNQ6RPnA&timestamp=1645723954" alt="" />
                    <h2>NATO’s inadequate response to Russia’s invasion of Ukraine</h2>
                    <p>People take shelter in a subway station in Kyiv, Ukraine, on February 24. If world leaders cannot come up with the right solutions, they should at least refrain from making irresponsible and meaningless statements. This is the least the people of Ukraine deserve right now. PHOTO: REUTERS</p>
                    <div className="btn">read more</div>
                </div>
                <div className="news">
                    <img src="https://images.thedailystar.net/sites/default/files/styles/big_202/public/images/2022/02/24/download_2.jpg?itok=UNQ6RPnA&timestamp=1645723954" alt="" />
                    <h2>NATO’s inadequate response to Russia’s invasion of Ukraine</h2>
                    <p>People take shelter in a subway station in Kyiv, Ukraine, on February 24. If world leaders cannot come up with the right solutions, they should at least refrain from making irresponsible and meaningless statements. This is the least the people of Ukraine deserve right now. PHOTO: REUTERS</p>
                    <div className="btn">read more</div>
                </div>
                <div className="news">
                    <img src="https://images.thedailystar.net/sites/default/files/styles/big_202/public/images/2022/02/24/download_2.jpg?itok=UNQ6RPnA&timestamp=1645723954" alt="" />
                    <h2>NATO’s inadequate response to Russia’s invasion of Ukraine</h2>
                    <p>People take shelter in a subway station in Kyiv, Ukraine, on February 24. If world leaders cannot come up with the right solutions, they should at least refrain from making irresponsible and meaningless statements. This is the least the people of Ukraine deserve right now. PHOTO: REUTERS</p>
                    <div className="btn">read more</div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default News;