import styles from './Hero.module.css';
import { HeroAnimes } from '../../features/animes/HeroAnimes';


export const Hero = () => {


    return (
        <>
            <div className={styles.heroContainer}>
                <HeroAnimes />
            </div>
        </>
    )
}