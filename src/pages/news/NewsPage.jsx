import styles from './NewsPage.module.css';
import { ConstructionPage } from '../constructionPage/ConstructionPage';
import { useState, useEffect} from 'react';

export const NewsPage = () => {

    const [news, setNews] = useState([]);
    const [error, setError] = useState();

    useEffect(() => {
        // Call your backend
        fetch("http://localhost:5000/news")
        .then((res) => {
            if (!res.ok) {
            throw new Error("Network response was not ok");
            }
            return res.json();
        })
        .then((data) => {
            setNews(data);
        })
        .catch((err) => {
            setError(err.message);
        });
    }, []);

    return (
        <>
            <div className={styles.newsPageContainer}>
                {/* {news ? <p>news fetched</p> : <ConstructionPage /> } */}
                <ConstructionPage />
            </div>  
        </>
    )
}