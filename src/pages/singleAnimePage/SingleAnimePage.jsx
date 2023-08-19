import styles from './SingleAnimePage.module.css';
import { useParams } from 'react-router';
import { selectCurrentAnime } from '../../features/isLoggedIn/isLoggedInSlice';
import { useSelector } from 'react-redux';
import { GenreCard } from '../../components/genreCard/GenreCard';
import noTrailerGif from '../../images/gifs/yawn-min.gif';

export const SingleAnimePage = () => {

    const { id } = useParams();
    const currentAnime = useSelector(selectCurrentAnime);   

    return (

        <>
            <div className={styles.singlePageContainer} >
                <div className={styles.infoContainer}>
                    <div className={`${styles.info} ${styles.left}`}>
                        <h1>Watch {currentAnime.title}</h1>
                        <p id={styles.synopsis}>{currentAnime.synopsis}</p>
                        <div className={styles.genreCardContainer}>
                            {currentAnime.genres.map(genre => <GenreCard genre={genre.name} key={genre.name} /> )}
                        </div>
                    </div>
                    <div className={`${styles.info} ${styles.right}`}>
                        {currentAnime.trailer
                        ? <iframe id={styles.trailerWrapper} src={currentAnime.trailer}></iframe>
                        : <img id={styles.noTrailerGif} src={noTrailerGif} />
                        }
                    </div>
                </div>
                <div className={styles.backgroundImage} style={{backgroundImage: `url(${currentAnime.thumbnail})`}}></div>
            </div>
        </>
    )
}