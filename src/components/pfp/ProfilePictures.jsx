import styles from './ProfilePictures.module.css';
import { ProfilePic } from './ProfilePic';
import { pfpImages } from '../../data/pfpData';

export const ProfilePictures = () => {

    return (

        <>
            <div className={styles.profilesContainer}>
                {pfpImages.map(pfp => <ProfilePic img={pfp} />)}
            </div>
        </>
    )
}