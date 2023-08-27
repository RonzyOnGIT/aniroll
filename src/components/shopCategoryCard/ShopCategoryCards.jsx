import styles from './ShopCategoryCards.module.css';
import {categoryItems} from '../../data/shopData';
import { ShopCategoryCard } from '../../components/shopCategoryCard/ShopCategoryCard';

export const ShopCategoryCards = () => {

    return (

        <>
            <div className={styles.categoriesContainer}>
                {categoryItems.map(category => <ShopCategoryCard image={category.image} category={category.category} key={category.category} />)}
            </div>
        </>
    )
}