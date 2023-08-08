import styles from './Loading.module.css';

export const Loading = () => {

    return (
        <>
            <div className={styles.loadingContainer}>
                <span className={styles.loader}></span>
            </div>  
        </>
    )
}