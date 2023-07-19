import styles from './Home.module.css';

import { Hero } from '../../components/hero/Hero';

export const Home = () => {

    return (
        <>
            <Hero />
            <h1 id={styles.homeText}>Home</h1>
        </>
    )
}