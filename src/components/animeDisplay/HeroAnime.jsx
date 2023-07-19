import styles from './HeroAnime.module.css';

export const HeroAnime = ({ anime }) => {

    return (
        <>
            <div className={styles.animeDisplayContainer}>
                <img id={styles.backgroundCover} src={anime.images.jpg.large_image_url} />
                <p>{anime.title}</p>
                <p id={styles.synopsis}>{anime.synopsis}</p>
            </div>
        
        </>
    )
}