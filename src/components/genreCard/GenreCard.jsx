import styles from './GenreCard.module.css';

export const GenreCard = ({ genre }) => {

    return (

        <>
            <div className={styles.cardWrapper}>
                <p>{genre}</p>
            </div>
        </>
    )

}