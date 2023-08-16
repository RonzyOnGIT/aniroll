import styles from './AnimeCardFlipped.module.css';
import { WatchListIcon } from '../../components/icons/WatchListIcon';
import { PlayIcon } from '../../components/icons/PlayIcon';
import { useDispatch, useSelector } from 'react-redux';
import { addAnimeToWatchlist, removeAnimeFromWatchlist, selectWatchlist } from '../../features/isLoggedIn/isLoggedInSlice';
import { useState } from 'react';
import { useNavigate } from 'react-router';

export const AnimeCardFlipped = ({ title, thumbnail, synopsis, isHovered }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const watchlist = useSelector(selectWatchlist);
    const [isAnimeOnWatchlist, setIsAnimeOnWatchlist] = useState();

    const handleClick = () => {
        const animeToAdd = {title: title, thumbnail: thumbnail, synopsis: synopsis, isHovered: isHovered};
        //check if anime is already on watchlist so it won't add duplicate
        if (isAnimeOnWatchlist == true) {
            setIsAnimeOnWatchlist(!isAnimeOnWatchlist);
            dispatch(removeAnimeFromWatchlist(animeToAdd));
            return;
        }
        dispatch(addAnimeToWatchlist(animeToAdd));
        setIsAnimeOnWatchlist(!isAnimeOnWatchlist);
    }

    const navigateToSingleAnimePage = () => {
        navigate(`series/${title}`);
    }



    return (
        <>
            <div className={isHovered ? styles.flippedContainer : styles.noDisplay}>
                <p>{title}</p>
                <p>{synopsis}</p>
                <img src={thumbnail} />
                <div className={styles.iconsContainer}>
                    <WatchListIcon onClick={handleClick} isOnWatchlist={isAnimeOnWatchlist}/>
                    <PlayIcon handleClick={navigateToSingleAnimePage} />
                </div>
            </div>
        </>
    )
}


