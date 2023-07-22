import styles from './AccountPage.module.css';

import { AccountForm } from '../../components/form/AccountForm';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUsername } from '../../features/isLoggedIn/isLoggedInSlice';

export const AccountPage = () => {

    const isLoggedIn = useSelector(selectIsLoggedIn);
    const username = useSelector(selectUsername);

    return (
        <>

            <div className={styles.accountPageContainer}>
                {isLoggedIn 
                    ?   <h2>Welcome {username}</h2>
                    :   <div className={styles.notLoggedInContainer}>
                            <h2>Create new account</h2>
                            <AccountForm />
                        </div> 
                }
            </div>
            
        </>
    )
}