import styles from './ImageHeader.module.css';
import { selectCurrentAnime } from '../../features/isLoggedIn/isLoggedInSlice';
import { useSelector } from 'react-redux';



export const ImageHeader = () => {

    const currentAnime = useSelector(selectCurrentAnime);



    return (

        <>
            <div className={styles.singleShowContainer} style={{backgroundImage: `url(${currentAnime.thumbnail})`}}>
                <div className={styles.colorOverlay}></div>
                {/* <div className={styles.imageWrapper}>
                    <img id={styles.imageHeader} src={currentAnime.thumbnail} />
                </div> */}
            </div>
        </>
    )
}