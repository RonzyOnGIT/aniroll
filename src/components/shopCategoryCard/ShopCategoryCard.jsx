import styles from './ShopCategoryCard.module.css';
import { useNavigate } from 'react-router-dom';


export const ShopCategoryCard = ({ image, category }) => {    

    const navigate = useNavigate();

    return (

        <>
            <div className={styles.categoryCardContainer} onClick={() => navigate(`${category}`)}>
                <img id={styles.image} src={image} />
                <h3 id={styles.text}>{category}</h3>
            </div>
        </>
    )
}