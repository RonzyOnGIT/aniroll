import styles from './WatchlistAnimeFlipped.module.css';
import { Cross } from '../icons/Cross';
import { useDispatch, useSelector } from 'react-redux';
import { removeAnimeFromWatchlist } from '../../features/isLoggedIn/isLoggedInSlice';

export const WatchlistAnimeFlipped = ({ isHovered, cover, title }) => {

    const dispatch = useDispatch();
    const animeTitle = {title: title};
    // const isOnWatchlist = useSelector(state => state.loggedIn.watchlist);


    const handleClick = () => {
        dispatch(removeAnimeFromWatchlist(animeTitle));
    }

    return (

        <>
            <div className={isHovered ? styles.flippedWatchlistContainer : styles.noDisplay}>
                <img src={cover} />
                <p>{title}</p>
                <div className={styles.crossContainer} onClick={handleClick}>
                    <h6>Remove From Watchlist</h6>
                    <Cross />
                </div>
            </div>
        </>
    )
}