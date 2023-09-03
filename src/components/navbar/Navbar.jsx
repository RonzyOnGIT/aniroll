import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import userIcon from '../../images/icons/whiteIcon.png';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectPfp, selectIsLoggedIn } from '../../features/isLoggedIn/isLoggedInSlice';

export const Navbar = () => {

    const [isHamburgerClicked, setIsHamburgerClicked] = useState(false);
    const currentPfp = useSelector(selectPfp);
    const isLoggedIn = useSelector(selectIsLoggedIn);
    
    const toggleHamburger = () => {
        setIsHamburgerClicked(!isHamburgerClicked);
    }

    return (
        <>
            <nav className={styles.navbar}>
                <NavLink to='/'><p id={styles.logoSmall}>aniroll</p></NavLink>
                <ul className={isHamburgerClicked ? `${styles.list} ${styles.active}` : styles.list}>
                    <NavLink to='/'><p id={styles.logo}>aniroll</p></NavLink>
                    <NavLink to='categories' onClick={toggleHamburger}>Categories</NavLink>
                    <NavLink to='news' onClick={toggleHamburger}>News</NavLink>
                    <NavLink to='store' onClick={toggleHamburger}>Shop</NavLink>
                </ul>
                <div className={styles.userIconContainer}>
                    <NavLink to='account'><img id={isLoggedIn ? styles.customIcon : styles.userIcon} src={isLoggedIn ? currentPfp : userIcon} /></NavLink>
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

