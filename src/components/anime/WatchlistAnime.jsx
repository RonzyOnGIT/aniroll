import styles from './WatchlistAnime.module.css';
import { WatchlistAnimeFlipped } from './WatchlistAnimeFlipped';
import { useState } from 'react';

export const WatchlistAnime = ({ thumbnail, title }) => {

    const [isHovered, setIsHovered] = useState(false);
    const handleHover = () => {
        setIsHovered(!isHovered);
    }

    return (

        <>
            <div className={styles.watchlistWrapper} onMouseEnter={handleHover} onMouseLeave={handleHover}>
                <img id={isHovered ? styles.noImage : styles.animeCover} src={thumbnail} />
                <p id={isHovered ? styles.noText : styles.text}>{title}</p>
                <WatchlistAnimeFlipped isHovered={isHovered} cover={thumbnail} title={title} />
            </div>
        </>
    )
}