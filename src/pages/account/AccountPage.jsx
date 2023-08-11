import styles from './AccountPage.module.css';

import { AccountForm } from '../../components/form/AccountForm';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUsername } from '../../features/isLoggedIn/isLoggedInSlice';
import { Profile } from '../../components/profile/Profile';
import { useState } from 'react';
import { Loading } from '../../components/loading/Loading';

import backgroundTest from '../../images/backgrounds/accBackground-min.png';

export const AccountPage = () => {

    const isLoggedIn = useSelector(selectIsLoggedIn);
    const username = useSelector(selectUsername);

    const [hasBackgroundLoaded, setHasBackgroundLoaded] = useState(false);

    const handleImageHasLoaded = () => {
        setHasBackgroundLoaded(true);
    }

    return (
        <>
            {/* use same background img from css to to wait to show page until image has loaded */}
            <img id={styles.backgroundForLoading} src={backgroundTest} onLoad={handleImageHasLoaded} />

            {!hasBackgroundLoaded
            
             ? <Loading />
             : <div className={styles.accountPageContainer}>
                    {isLoggedIn 
                     ?  <Profile username={username} />
                     :  <div className={styles.notLoggedInContainer}>
                            <h2>Create new account</h2>
                            <AccountForm />
                        </div> 
                    }
                </div> }     
        </>
    )
}