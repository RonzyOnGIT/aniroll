import styles from './Animes.module.css';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Anime } from '../../components/anime/Anime';

export const Animes = ({ animes, loading }) => {


    return (

        <>
            <div className={styles.animesContainer}>
                {loading === undefined ? <p>Loading...</p> : animes.map(anime => <Anime key={anime.title} thumbnail={anime.images.jpg.small_image_url} synopsis={anime.synopsis} title={anime.title} />)}
            </div>
        </>
    )
}