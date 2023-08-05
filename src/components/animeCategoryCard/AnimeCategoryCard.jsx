import styles from './AnimeCategoryCard.module.css';

export const AnimeCategoryCard = ({ category, cover }) => {

    return (

        <>
            <div className={styles.categoryCardContainer}>
                <img id={styles.cover} src={cover} />
                <p id={styles.categoryHeader}>{category}</p>
            </div>
        </>
    )
}