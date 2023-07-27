import styles from './HomeSection.module.css';

export const HomeSection = ({ title }) => {

    return(

        <>
            <div className={styles.sectionContainer}>
                <h2 id={styles.title}>{title}</h2>
                <div id={styles.divider}></div>
            </div>
        </>
    )
}