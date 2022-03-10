import React, { useEffect, useState } from 'react';
import '../styles/News.css';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import Title from '../elements/Title';
import OneNews from './OneNews';

const News = () => {
    const [news,setNews] = useState([])
    useEffect(()=>{
        fetch('https://newsapi.org/v2/everything?q=tesla&from=2022-02-10&sortBy=publishedAt&apiKey=c05b7a2b48ae49ce90f5406afcb601d9')
        .then(res => res.json())
        // console.log(data.articles)
        .then(data => setNews(data.articles))
    },[])
    return (
        <div className=''>
            <Nav></Nav>
            <Title toptitle="Update News" bigtitle="Put Your Hand with Us"></Title>
            <div className="news-area">
                    {
                        news.map(articles => (
                            <div className='articles'>
                            <img src={articles.urlToImage} alt="" />
                            <div className="article-content">
                                <h3>{articles.title}</h3>
                                <article>{articles.description}</article>
                                <button className="btn">read more</button>
                            </div>
                            </div>
                        ))
                    }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default News;