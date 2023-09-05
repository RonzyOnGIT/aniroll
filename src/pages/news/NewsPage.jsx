import styles from './NewsPage.module.css';
import { ConstructionPage } from '../constructionPage/ConstructionPage';

export const NewsPage = () => {

    return (
        <>
            <div className={styles.newsPageContainer}>
                <ConstructionPage />
            </div>  
        </>
    )
}