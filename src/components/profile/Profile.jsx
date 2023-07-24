import styles from './Profile.module.css';

import goku from '../../images/pfp/gokupfp.png';

export const Profile = ({ username }) => {





    return (
        <>
            <div className={styles.profileContainer} >
                <div className={styles.profileWrapper}>
                    <div className={styles.pfpImage}>
                        <img id={styles.pfp} src={goku} />
                        <p id={styles.changePfp}>Change</p>
                    </div>
                    <h2>{username}</h2>
                </div>
            </div>
        </>
    )
}