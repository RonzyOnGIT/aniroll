import styles from './AccountForm.module.css';

import { useDispatch } from 'react-redux';
import { logIn } from '../../features/isLoggedIn/isLoggedInSlice';
import { useState } from 'react';


export const AccountForm = () => {

    const dispatch = useDispatch();

    const [input, setInput] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
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
        </>

        )
}