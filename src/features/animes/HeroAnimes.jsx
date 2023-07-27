import styles from './HeroAnimes.module.css';

import { heroData }  from '../../data/heroData';
import { useState, useEffect } from 'react';


export const HeroAnimes = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentHero, setCurrentHero] = useState();    

    useEffect(() => {

        setTimeout(() => {

            if (currentIndex === 3 || currentIndex > 3) {
                setCurrentIndex(0);
                setCurrentHero(heroData[0]);
                return;
            }
            setCurrentIndex(prev => prev + 1);
            setCurrentHero(heroData[currentIndex + 1]);

        }, 4000)
    })


    return (
        <>
            <div className={styles[`backgroundImage${currentIndex}`]}>
                <div className={styles.content}>
                    <h2>{currentHero ? currentHero.title : heroData[0].title}</h2>
                    <p>{currentHero ? currentHero.synopsis : heroData[0].synopsis}</p>
                    <button>Watch Now</button>
                </div>
                <div className={styles.circleContainer}>
                    <div className={currentIndex === 0 ? styles.circleActive : styles.circle}></div>
                    <div className={currentIndex === 1 ? styles.circleActive : styles.circle}></div>
                    <div className={currentIndex === 2 ? styles.circleActive : styles.circle}></div>
                    <div className={currentIndex === 3 ? styles.circleActive : styles.circle}></div>
                </div>
            </div>
        </>
    )
}