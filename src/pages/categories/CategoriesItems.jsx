import styles from './CategoriesItems.module.css';
import { useParams } from 'react-router-dom';

export const CategoriesItems = () => {

    const { category } = useParams();

    return (

        <>
            <div className={styles.categoriesItemsContainer}>
                <h1>Shop {category}</h1>
            </div>
        </>
    )
}