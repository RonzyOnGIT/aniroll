import styles from './Anime.module.css';


export const Anime = ({ thumbnail, title, synopsis }) => {

    return (
        <>
            <div className={styles.animeWrapper}>
                <img id={styles.animeCover} src={thumbnail} />
                <p>{title}</p>
            </div>
        </>
    )
}