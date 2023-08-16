import styles from './WatchlistSlider.module.css';
import { selectWatchlist } from '../../features/isLoggedIn/isLoggedInSlice';
import { useSelector } from 'react-redux';
import { WatchlistAnime } from '../anime/WatchlistAnime';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import { settings } from '../../utils/carouselSettings';

export const WatchlistSlider = () => {

    const animes = useSelector(selectWatchlist);

    return (

        <>
            <div className={styles.watchlistSliderContainer}>
                <h2>Watchlist</h2>
                <div id={styles.divider}></div>
                <Slider {...settings}>
                    {Object.keys(animes).map(anime => <WatchlistAnime thumbnail={animes[anime].thumbnail} title={animes[anime].title} key={animes[anime].title} />)}
                </Slider>
            </div>
        </>
    )
}