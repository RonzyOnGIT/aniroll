import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import userIcon from '../../images/icons/whiteIcon.png';

export const Navbar = () => {
    return (
        <>
            <nav className={styles.navbar}>
                <ul>
                    <NavLink to='/'><p id={styles.logo}>aniroll</p></NavLink>
                    <NavLink to='categories' >Categories</NavLink>
                    <NavLink >News</NavLink>
                    <NavLink >Shop</NavLink>
                </ul>
                <div className={styles.userIconContainer}>
                    <img id={styles.userIcon} src={userIcon} />
                </div>
            </nav>
        </>
    )
}

