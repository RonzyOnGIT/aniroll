import styles from './FileUploader.module.css';
import { changePfp } from '../../features/isLoggedIn/isLoggedInSlice';
import { useDispatch } from 'react-redux';

export const FileUploader = () => {

    const dispatch = useDispatch();

    // const handleFileUpload = (e) => {
    //     e.preventDefault();
    //     console.log(e);
    // }

    return (

        <>
        
            <form className={styles.fileUploadWrapper} >
                <input id='file' type='file' accept='image/*' />
                <label htmlFor='file'>Upload Custom Picture</label>
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}