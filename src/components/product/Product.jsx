import styles from './Product.module.css';

export const Product = ({ category, image }) => {

    return (

        <>
            <div className={styles.productContainer}>
                <img id={styles.productImage} src={image} />
                <h4>{category}</h4>
            </div>
        </>
    )
}