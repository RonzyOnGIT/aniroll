import styles from './HomeSection.module.css';
import { Animes } from '../../features/anime/Animes';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAnimesForSection } from '../../features/anime/animeSlice';

export const HomeSection = ({ title, endPoint }) => {

    const animes = useSelector(state => state.animes.genres[endPoint]?.animes);

    // console.log(animes);
    
    //loading state for each genre state
    let individualLoading = useSelector(state => state.animes.genres[endPoint]?.isLoading);    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAnimesForSection(endPoint))
    }, [])

    return(

        <>
            <div className={styles.sectionContainer}>
                <h2 id={styles.title}>{title}</h2>
                <div id={styles.divider}></div>
                <Animes animes={animes} loading={individualLoading} />
            </div>
        </>
    )
}