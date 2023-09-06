import styles from './ConstructionPage.module.css';
import character from '../../images/pngs/cons.webp';

export const ConstructionPage = () => {

    return (

        <>
            <div className={styles.constructionPageContainer}>
                <img id={styles.animeChar} src={character} />
                <h1>Page is under construction</h1>
            </div>
        </>
    )
}