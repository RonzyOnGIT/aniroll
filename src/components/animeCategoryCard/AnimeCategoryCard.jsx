import styles from './AnimeCategoryCard.module.css';
import { useState } from 'react';

export const AnimeCategoryCard = ({ category, cover }) => {

    const [hasImageLoaded, setHasImageLoaded] = useState(false);

    const imageLoaded = () => {
        setHasImageLoaded(true);
    }

    return (

        <>
            <img onLoad={imageLoaded} id={styles.imagePlaceholder} src={cover} />
            <div className={styles.categoryCardContainer}>
                <img id={styles.cover} src={cover} />
                <p className={hasImageLoaded ? styles.categoryHeader : `${styles.categoryHeader} ${styles.skeleton}`}>{category}</p>
            </div>
        </>
    )
}