import styles from './NewsCards.module.css';
import { NewsCard } from './NewsCard';

export const NewsCards = ({ news }) => {

    return (

        <>
            <div className={styles.newsContainer}>
                {news.map((card, index) => <NewsCard image={card.articleImg} time={card.secondDivTime} description={card.announcement} key={index} />)}
            </div>
        </>
    )


}