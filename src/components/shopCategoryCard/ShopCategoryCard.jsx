import styles from './ShopCategoryCard.module.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


export const ShopCategoryCard = ({ image, category }) => {    

    const navigate = useNavigate();
    const [hasImageLoaded, setHasImageLoaded] = useState();

    const imageLoaded = () => {
        setHasImageLoaded(true);
    }

    return (

        <>
            <img id={styles.placeholderImage} src={image} onLoad={imageLoaded} />
            {hasImageLoaded
             ?  <div className={styles.categoryCardContainer} onClick={() => navigate(`${category}`)}>
                    <img id={styles.image} src={image} />
                    <h3 id={styles.text}>{category}</h3>
                </div>
             :  <div className={styles.skeleton}></div>
            }
        </>
    )
}