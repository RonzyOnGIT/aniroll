import styles from './Navbar.module.css';

export const Navbar = () => {
    return (
        <>
            <nav className={styles.navbar}>
                <ul>
                    <li><a>Categories</a></li>
                    <li><a>News</a></li>
                    <li><a>Shop</a></li>
                </ul>
            </nav>
        </>
    )
}



//categories, news, shop