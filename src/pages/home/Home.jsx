import styles from './Home.module.css';

import { Hero } from '../../components/hero/Hero';
import { HomeSection } from '../../components/homeSection/HomeSection';
import { ShopPromotion } from '../../components/shopPromotion/ShopPromotion';
import flashSale from '../../images/banners/promoBanner-min.png';

export const Home = () => {

    return (
        <>
            <Hero />
            <div className={styles.homeContainer}>
                <HomeSection title={'Recommendations'} endPoint={'top/anime?limit=25'} />
                <HomeSection title={'New'} endPoint={'seasons/now'} />
                <ShopPromotion image={flashSale} navTo={'store'} />
            </div>
        </>
    )
}