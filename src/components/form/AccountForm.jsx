import styles from './AccountForm.module.css';

import { useDispatch } from 'react-redux';
import { logIn } from '../../features/isLoggedIn/isLoggedInSlice';

export const AccountForm = () => {

    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(logIn());
    }

    return (

        <>
            <form className={styles.formContainer} onSubmit={onSubmit}>
                <input type='text' placeholder='username' />
                <button type='submit'>Create Account</button>
            </form>
        </>

        )
}