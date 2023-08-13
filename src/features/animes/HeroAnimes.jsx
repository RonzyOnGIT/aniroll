import styles from './HeroAnimes.module.css';

import { heroData }  from '../../data/heroData';
import { useState, useEffect } from 'react';
import { Loading } from '../../components/loading/Loading';

export const HeroAnimes = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentHero, setCurrentHero] = useState(heroData[0]);    
    const [heroImage, setHeroImage] = useState(heroData);
    const [isBackgroundLoading, setIsBackgroundLoading] = useState(true);

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
    }, [currentHero])


    useEffect(() => {
        const loadImage = image => {
          return new Promise((resolve, reject) => {
            const loadImg = new Image();
            loadImg.src = image;
            loadImg.onload = () => resolve(loadImg.src);
            loadImg.onerror = err => reject(err);
          })
        }
    
        Promise.all(heroImage.map(image => loadImage(image.image)))
          .then(
            (image) => {
                setHeroImage(image);
                setIsBackgroundLoading(false);
            })
          .catch(err => console.log("Failed to load images", err))
    }, [])


    


    return (
        <>
            {isBackgroundLoading ? <Loading /> : 
            <div className={styles.backgroundImage} style={{backgroundImage: `url(${heroImage[currentIndex]})`}}>
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
            }
        </>
    )
}