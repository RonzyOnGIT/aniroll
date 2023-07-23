import styles from './AccountPage.module.css';

import { AccountForm } from '../../components/form/AccountForm';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUsername } from '../../features/isLoggedIn/isLoggedInSlice';
import { Profile } from '../../components/profile/Profile';

export const AccountPage = () => {

    const isLoggedIn = useSelector(selectIsLoggedIn);
    const username = useSelector(selectUsername);

    return (
        <>

            <div className={styles.accountPageContainer}>
                {isLoggedIn 
                    ?   <Profile username={username} />
                    :   <div className={styles.notLoggedInContainer}>
                            <h2>Create new account</h2>
                            <AccountForm />
                        </div> 
                }
            </div>
            
        </>
    )
}