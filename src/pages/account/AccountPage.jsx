import styles from './AccountPage.module.css';

import { AccountForm } from '../../components/form/AccountForm';


export const AccountPage = () => {

    return (
        <>
            <div className={styles.accountPageContainer}>
                <h2>Create new account</h2>
                <AccountForm />
            </div>
        </>
    )
}