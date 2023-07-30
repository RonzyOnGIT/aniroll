import styles from './Home.module.css';

import { Hero } from '../../components/hero/Hero';
import { HomeSection } from '../../components/homeSection/HomeSection';
import { fetchAnimesForSection } from '../../features/anime/animeSlice';



export const Home = () => {

    return (
        <>
            <Hero />
            <div className={styles.homeContainer}>
                <HomeSection title={'Recommendations'} endPoint={'top/anime?limit=25'} />
                <HomeSection title={'New'} endPoint={'seasons/now'} />
            </div>
        </>
    )
}