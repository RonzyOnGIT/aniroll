import styles from './AccountForm.module.css';

import { useDispatch } from 'react-redux';
import { logIn } from '../../features/isLoggedIn/isLoggedInSlice';
import { useState } from 'react';


export const AccountForm = () => {

    const dispatch = useDispatch();

    const [input, setInput] = useState('');
    const [error, setError] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        if (input.length === 0 || input.length > 16) {
            setError(true);
            return ;
        }
        dispatch(logIn(input));
    }

    const handleChange = ({ target }) => {
        const { value } = target;
        setInput(value);
    }

    return (

        <>
            <form className={styles.formContainer} onSubmit={onSubmit}>
                <input type='text' placeholder='username' value={input} onChange={handleChange} />
                <button type='submit'>Create Account</button>
            </form>
            {error && <p id={styles.verificationText}>Username must be between 1 and 16 characters long</p>}
        </>

        )
}