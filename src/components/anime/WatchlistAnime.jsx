import styles from './WatchlistAnime.module.css';

export const WatchlistAnime = ({ thumbnail, title }) => {

    return (

        <>
            <div className={styles.watchlistWrapper}>
                <img id={styles.animeCover} src={thumbnail} />
                <p id={styles.text}>{title}</p>
            </div>
        </>
    )
}