import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import userIcon from '../../images/icons/whiteIcon.png';
import { useState } from 'react';

export const Navbar = () => {

    const [isHamburgerClicked, setIsHamburgerClicked] = useState(false);
    
    const toggleHamburger = () => {
        setIsHamburgerClicked(!isHamburgerClicked);
    }

    return (
        <>
            <nav className={styles.navbar}>
                <NavLink to='/'><p id={styles.logoSmall}>aniroll</p></NavLink>
                <ul className={isHamburgerClicked ? `${styles.list} ${styles.active}` : styles.list}>
                    <NavLink to='/'><p id={styles.logo}>aniroll</p></NavLink>
                    <NavLink to='categories' >Categories</NavLink>
                    <NavLink >News</NavLink>
                    <NavLink >Shop</NavLink>
                </ul>
                <div className={styles.userIconContainer}>
                    <NavLink to='account'><img id={styles.userIcon} src={userIcon} /></NavLink>
                </div>
                <div className={isHamburgerClicked ? `${styles.hamburger} ${styles.active}` : styles.hamburger} onClick={toggleHamburger}>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </div>
            </nav>
        </>
    )
}

