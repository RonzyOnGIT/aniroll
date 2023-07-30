import styles from './Animes.module.css';
import { Anime } from '../../components/anime/Anime';
import { LoadingSkeleton } from '../../components/loadingSkeleton/LoadingSkeleton';


export const Animes = ({ animes, loading }) => {


    return (

        <>
            <div className={styles.animesContainer}>
                {loading === undefined ? <LoadingSkeleton /> : animes.map(anime => <Anime key={anime.title} thumbnail={anime.images.jpg.large_image_url} synopsis={anime.synopsis} title={anime.title} />)}
            </div>
        </>
    )
}