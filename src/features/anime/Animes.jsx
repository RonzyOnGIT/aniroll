import styles from './Animes.module.css';
import { Anime } from '../../components/anime/Anime';
import { LoadingSkeleton } from '../../components/loadingSkeleton/LoadingSkeleton';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Animes = ({ animes, loading }) => {

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4
      };


    return (

        <>
            <div className={styles.animesContainer}>
                <Slider {...settings}>
                    {loading === undefined ? <LoadingSkeleton /> : animes.map(anime => <Anime key={anime.title} thumbnail={anime.images.jpg.large_image_url} synopsis={anime.synopsis} title={anime.title} />)}
                </Slider>
            </div>
        </>
    )
}