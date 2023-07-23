import styles from './Profile.module.css';

import goku from '../../images/pfp/gokupfp.png';


export const Profile = ({ username }) => {

    return (
        <>
            <div className={styles.profileContainer}>
                <div className={styles.profileWrapper}>
                    <img id={styles.pfp} src={goku} />
                    <h2>{username}</h2>
                </div>
            </div>
        </>
    )
}