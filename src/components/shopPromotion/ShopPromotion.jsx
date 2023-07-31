import styles from './ShopPromotion.module.css';
import { NavLink } from 'react-router-dom';

export const ShopPromotion = ({ image, navTo }) => {

    return(

        <>
            <div className={styles.promotionContainer}>
                <NavLink to={navTo}><img src={image} /></NavLink>
            </div>
        </>
    )
}