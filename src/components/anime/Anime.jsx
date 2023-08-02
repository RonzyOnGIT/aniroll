import styles from './Anime.module.css';
import { AnimeCardFlipped } from './AnimeCardFlipped';
import { useState } from 'react';

export const Anime = ({ thumbnail, title, synopsis }) => {

    const [hovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(!hovered);
    }

    return (

        <>
            <div className={styles.animeWrapper} onMouseEnter={handleHover} onMouseLeave={handleHover}>
                <img id={hovered ? styles.noImage : styles.animeCover} src={thumbnail} />
                <p id={hovered ? styles.noText : styles.text}>{title}</p>
                <AnimeCardFlipped synopsis={synopsis} thumbnail={thumbnail} title={title} isHovered={hovered} />
            </div>
        </>
    )
}