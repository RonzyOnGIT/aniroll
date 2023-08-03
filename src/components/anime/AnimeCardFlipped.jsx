import styles from './AnimeCardFlipped.module.css';
import { WatchListIcon } from '../../components/icons/WatchListIcon';

export const AnimeCardFlipped = ({ title, thumbnail, synopsis, isHovered }) => {

    return (
        <>
            <div className={isHovered ? styles.flippedContainer : styles.noDisplay}>
                <p>{title}</p>
                <p>{synopsis}</p>
                <img src={thumbnail} />
                <div className={styles.iconsContainer}>
                    <WatchListIcon />
                    <WatchListIcon />
                    <WatchListIcon />
                </div>
            </div>
        </>
    )
}


