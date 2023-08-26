import styles from './ShopCategoryCard.module.css';


export const ShopCategoryCard = ({ image, category }) => {

    return (

        <>
            <div className={styles.categoryCardContainer}>
                <img id={styles.image} src={image} />
                <p>{category}</p>
            </div>
        </>
    )
}