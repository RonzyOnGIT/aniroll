import styles from './StorePage.module.css';
import bluray from '../../images/banners/bluray3.webp';
import { ShopCategoryCards } from '../../components/shopCategoryCard/ShopCategoryCards';

export const StorePage = () => {

    return (
        <>
            <div className={styles.storePageContainer}>
                <div className={styles.shopBannerWrapper}>
                    <img id={styles.shopBanner} src={bluray} />
                    <ShopCategoryCards />
                </div>
            </div>
        </>
    )
}