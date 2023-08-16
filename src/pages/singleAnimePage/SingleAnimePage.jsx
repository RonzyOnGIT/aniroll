import styles from './SingleAnimePage.module.css';
import { useParams } from 'react-router';
import { ImageHeader } from '../../components/imageHeader/ImageHeader';

export const SingleAnimePage = () => {

    const { id } = useParams();

    return (

        <>
            <div className={styles.singlePageContainer}>
                <ImageHeader />
            </div>
        </>
    )
}