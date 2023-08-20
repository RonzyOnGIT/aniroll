import styles from './StorePage.module.css';
import bluray from '../../images/banners/bluray3.webp';

export const StorePage = () => {

    return (
        <>
            <div className={styles.storePageContainer}>
                <img id={styles.shopBanner} src={bluray} />
            </div>
        </>
    )
}