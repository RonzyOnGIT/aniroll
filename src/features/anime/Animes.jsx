import styles from './Animes.module.css';
import { Anime } from '../../components/anime/Anime';
import { LoadingSkeleton } from '../../components/loadingSkeleton/LoadingSkeleton';
import { settings } from '../../utils/carouselSettings';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";



import "slick-carousel/slick/slick-theme.css";

export const Animes = ({ animes, loading }) => {




    return (

        <>
            {loading === undefined && <LoadingSkeleton />}
            <div className={styles.animesContainer}>
                <Slider {...settings}>
                    {loading === undefined ? <p id={styles.loadingBlank}></p> : animes.map(anime => <Anime key={anime.title} thumbnail={anime.images.jpg.large_image_url} synopsis={anime.synopsis} title={anime.title} />)}
                </Slider>
            </div>
        </>
    )
}