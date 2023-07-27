import styles from './Home.module.css';

import { Hero } from '../../components/hero/Hero';
import { HomeSection } from '../../components/homeSection/HomeSection';


export const Home = () => {

    return (
        <>
            <Hero />
            <div className={styles.homeContainer}>
                <HomeSection title={'Recommendations'} />
                <HomeSection title={'New'} />
            </div>
        </>
    )
}