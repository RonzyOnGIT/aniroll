import styles from './FileUploader.module.css';
import { changePfp } from '../../features/isLoggedIn/isLoggedInSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import axios from 'axios';

export const FileUploader = () => {

    const dispatch = useDispatch();

    const [customPfp, setCustomPfp] = useState();


    const handleFileUpload = (e) => {
        e.preventDefault();
        if (!customPfp) {
            console.log('no file selected');
            return;
        }

        const fd = new FormData();
        fd.append('file', customPfp);

        axios.post('https://httpbin.org/post', fd, {
            headers: {
                'Custom-Header': 'value',
            }
        })
        .then(res => dispatch(changePfp(res.data.files.file)))
        .catch(err => console.error(err));
        
    }



    return (

        <>
        
            <form className={styles.fileUploadWrapper} onSubmit={handleFileUpload}>
                <input id='file' type='file' accept='image/*' onChange={(e) => setCustomPfp(e.target.files[0])} />
                <label htmlFor='file'>Upload Custom Picture</label>
                <button type='submit'>Update Pfp</button>
            </form>
        </>
    )
}