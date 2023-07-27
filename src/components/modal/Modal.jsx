import styles from './Modal.module.css';
import { ProfilePictures } from '../../components/pfp/ProfilePictures';

export const Modal = ( { isOpen, closeModal }) => {

    if (!isOpen) return null

    return (
        <>
            <div className={styles.modalContainer} onClick={closeModal}>
                <div className={styles.modalWrapper} onClick={e => e.stopPropagation()}>
                    <div className={styles.header}>
                        <h2>Change Avatar</h2>
                        <div className={styles.hamburger} onClick={closeModal}>
                            <span className={styles.bar}></span>
                            <span className={styles.bar}></span>
                            <span className={styles.bar}></span>
                        </div>
                    </div>
                    <ProfilePictures />
                </div>
            </div>
        </>
    )
}