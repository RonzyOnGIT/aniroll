import styles from './Product.module.css';
import { useState } from 'react';

export const Product = ({ category, image }) => {

    const [hasImageLoaded, setHasImageLoaded] = useState(false);

    const loadImage = () => {
        setHasImageLoaded(true);
    }

    return (

        <>
            <img src={image} id={styles.placeholderImage} onLoad={loadImage} />
            {hasImageLoaded
             ?  <div className={styles.productContainer}>
                    <img id={styles.productImage} src={image} />
                    <h4>{category}</h4>
                </div>
             :  <div className={styles.skeleton}></div> 
            }
        </>
    )
}