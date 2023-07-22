import styles from './AccountForm.module.css';

export const AccountForm = () => {

    return (

        <>
            <form className={styles.formContainer}>
                <input type='text' placeholder='username' />
                <button type='submit'>Create Account</button>
            </form>
        </>

        )
}