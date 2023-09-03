import styles from './ShopCategoryCards.module.css';
import {categoryItems} from '../../data/shopData';
import { ShopCategoryCard } from '../../components/shopCategoryCard/ShopCategoryCard';
import { useState } from 'react';
import gokuPlaceholder from '../../images/backgrounds/0821_NSF.webp';
import { Loading } from '../loading/Loading';

export const ShopCategoryCards = () => {

    const [hasImageLoaded, setHasImageLoaded] = useState();

    const imageLoaded = () => {
        setHasImageLoaded(true);
    }

    return (

        <>

            <img id={styles.placeholder} src={gokuPlaceholder} onLoad={imageLoaded} />
            {hasImageLoaded
             ?  <div className={styles.categoriesContainer}>
                    {categoryItems.map((category, index) => <ShopCategoryCard image={category.image} category={category.category} key={index} />)}
                </div>
             : <Loading />
            }

        </>
    )
}