import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import '../styles/OneNews.css';

const OneNews = (props) => {
    // catch newsid from url
    const {newstitle} = useParams()
    const [news,setNews] = useState([])
    useEffect(()=>{
        fetch('https://newsapi.org/v2/everything?q=tesla&from=2022-02-10&sortBy=publishedAt&apiKey=c05b7a2b48ae49ce90f5406afcb601d9')
        .then(res => res.json())
        // console.log(data.articles)
        .then(data => {
            data.articles.map(article => (
                setNews(article)
            ))
        })
    },[])

    return (
        <>
        <Nav></Nav>
        <div className="news-grid">
        <img src={news.urlToImage} alt="" />
        <div className="newsauthor-date">
            <span>Author : {news.author}</span>
            <span>PublishedAt : {news.publishedAt}</span>
        </div>
        <div className="article">
        <h3>{news.title}</h3>
        <article>{news.description}</article>
        <p>{news.content}</p>
        </div>
        </div>
        <Footer></Footer>
        </>
    );
};

export default OneNews;