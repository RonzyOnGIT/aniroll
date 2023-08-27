import styles from './ShopCategoryCard.module.css';


export const ShopCategoryCard = ({ image, category, isWide }) => {    

    return (

        <>
            <div className={styles.categoryCardContainer}>
                <img id={styles.image} src={image} />
                <h3 id={styles.text}>{category}</h3>
            </div>
        </>
    )
}