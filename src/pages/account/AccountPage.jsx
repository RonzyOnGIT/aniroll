import styles from './AccountPage.module.css';

import { AccountForm } from '../../components/form/AccountForm';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../features/isLoggedIn/isLoggedInSlice';

export const AccountPage = () => {

    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <>

            <div className={styles.accountPageContainer}>
                {isLoggedIn 
                    ?   <h2>Welcome</h2>
                    :   <div className={styles.notLoggedInContainer}>
                            <h2>Create new account</h2>
                            <AccountForm />
                        </div> 
                }
            </div>
            
        </>
    )
}