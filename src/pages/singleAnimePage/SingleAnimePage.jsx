import styles from './SingleAnimePage.module.css';
import { useParams } from 'react-router';

export const SingleAnimePage = () => {

    const { id } = useParams();

    return (

        <>
            <div className={styles.singlePageContainer}>
                <h1>Watch {id}</h1>
            </div>
        </>
    )
}