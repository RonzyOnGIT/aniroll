import styles from './NewsPage.module.css';
import { ConstructionPage } from '../constructionPage/ConstructionPage';
import { useState, useEffect} from 'react';
import { Loading } from '../../components/loading/Loading';
import { NewsCards } from '../../components/newsCards/NewsCards';

export const NewsPage = () => {

    const [news, setNews] = useState([]);
    const [error, setError] = useState();

    useEffect(() => {

        // once we fetch the news data, cache it to local storage to not make multiple calls and re-fetches
        const cachedData = localStorage.getItem("newsData");


        if (cachedData) {
            setNews(JSON.parse(cachedData));
        } else {
            fetch("http://localhost:5000/news")
            .then((res) => {
                if (!res.ok) {
                throw new Error("Network response was not ok");
                }
                return res.json();
            })
            .then((data) => {
                setNews(data);
                console.log(data);
                localStorage.setItem("newsData", JSON.stringify(data));
            })
            .catch((err) => {
                setError(err.message);
            });
        }


    }, []);

    return (
        <>
            <div className={styles.newsPageContainer}>
                {news ? <NewsCards news={news} /> : <Loading /> }
            </div>  
        </>
    )
}