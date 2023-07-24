import styles from './Profile.module.css';
import goku from '../../images/pfp/gokupfp.png';

import { useState } from 'react';
import { Modal } from '../../components/modal/Modal';

export const Profile = ({ username }) => {

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    }
    


    return (
        <>
            {/* {modal && <Modal /> } */}
            <div className={styles.profileContainer} >
                <div className={styles.profileWrapper}>
                    <div className={styles.pfpImage} onClick={toggleModal}>
                        <img id={styles.pfp} src={goku} />
                        <p id={styles.changePfp}>Change</p>
                    </div>
                    <h2>{username}</h2>
                </div>
            </div>
        </>
    )
}