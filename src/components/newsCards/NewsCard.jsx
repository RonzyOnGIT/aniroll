import styles from './NewsCard.module.css';

import { useState } from 'react';

export const NewsCard = ({ image, time, description }) => {

    const [hasImageLoaded, setHasImageLoaded] = useState(false);

    const imageLoaded = () => {
        setHasImageLoaded(true);
    }

    return (
        <>
            {/* place holder image to know when an image is fully loaded */}
            <img id={styles.placeholderImage} src={image} onLoad={imageLoaded} /> 
            {hasImageLoaded
                ?   <div className={styles.newsCardContainer}>
                        <img id={styles.image} src={image} />
                        <p id={styles.text}>{description}</p>
                    </div>
                :   <div className={styles.skeleton}></div>
            }
        </>
    )
}