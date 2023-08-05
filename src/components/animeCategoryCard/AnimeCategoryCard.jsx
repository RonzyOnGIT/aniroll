import styles from './AnimeCategoryCard.module.css';

export const AnimeCategoryCard = ({ category }) => {

    return (

        <>
            <div className={styles.categoryCardContainer}>
                <h2>{category}</h2>
            </div>
        </>
    )
}