import styles from './AnimeCardFlipped.module.css';
import { WatchListIcon } from '../../components/icons/WatchListIcon';
import { useDispatch } from 'react-redux';
import { addAnimeToWatchlist } from '../../features/isLoggedIn/isLoggedInSlice';
import { useState } from 'react';

export const AnimeCardFlipped = ({ title, thumbnail, synopsis, isHovered }) => {

    const dispatch = useDispatch();
    const [isAnimeOnWatchlist, setIsAnimeOnWatchlist] = useState();

    const handleClick = () => {
        dispatch(addAnimeToWatchlist({title: title, thumbnail: thumbnail, synopsis, synopsis, isHovered: isHovered}));
        setIsAnimeOnWatchlist(!isAnimeOnWatchlist);
    }

    return (
        <>
            <div className={isHovered ? styles.flippedContainer : styles.noDisplay}>
                <p>{title}</p>
                <p>{synopsis}</p>
                <img src={thumbnail} />
                <div className={styles.iconsContainer}>
                    <WatchListIcon onClick={handleClick} isOnWatchlist={isAnimeOnWatchlist}/>
                    <WatchListIcon onClick={handleClick} isOnWatchlist={isAnimeOnWatchlist}/>
                </div>
            </div>
        </>
    )
}


