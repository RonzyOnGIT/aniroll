import styles from './ImageHeader.module.css';
import { selectCurrentAnime } from '../../features/isLoggedIn/isLoggedInSlice';
import { useSelector } from 'react-redux';



export const ImageHeader = () => {

    const currentAnime = useSelector(selectCurrentAnime);

    return (

        <>
            <div className={styles.headerContainer} style={{backgroundImage: `url(${currentAnime.thumbnail})`}}>
                <div className={styles.imageWrapper}>
                    <img src={currentAnime.thumbnail} />
                </div>
            </div>
        </>
    )
}