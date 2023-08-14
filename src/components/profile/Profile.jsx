import styles from './Profile.module.css';

import { useState } from 'react';
import { Modal } from '../../components/modal/Modal';
import { selectPfp } from '../../features/isLoggedIn/isLoggedInSlice';
import { useSelector } from 'react-redux';
import { BookMark } from '../../components/icons/BookMark';

export const Profile = ({ username }) => {

    const [isOpen, setIsOpen] = useState(false);
    const pfp = useSelector(selectPfp);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    }



    return (
        <>
            <div className={styles.profileContainer} >
                <Modal isOpen={isOpen} closeModal={toggleModal} />
                <div className={styles.profileWrapper}>
                    <div className={styles.pfpImage} onClick={toggleModal}>
                        <img id={styles.pfp} src={pfp} />
                        <p id={styles.changePfp}>Change</p>
                    </div>
                    <h2>{username}</h2>
                    <div className={styles.watchListButton}>
                        <BookMark />
                        <p>Watchlist</p>
                    </div>
                </div>
            </div>
        </>
    )
}