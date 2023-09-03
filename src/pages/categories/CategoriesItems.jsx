import styles from './CategoriesItems.module.css';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const CategoriesItems = () => {

    const { category } = useParams();
    const navigate = useNavigate();

    return (

        <>
            <div className={styles.categoriesItemsContainer}>
                <h1>Shop {category}</h1>
            </div>
            <button id={styles.backButton} onClick={() => navigate('/store')}>Go Back</button>
        </>
    )
}