import styles from './FileUploader.module.css';
import { changePfp } from '../../features/isLoggedIn/isLoggedInSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import axios from 'axios';

export const FileUploader = () => {

    const dispatch = useDispatch();

    const [customPfp, setCustomPfp] = useState();
    const [noFileChosen, setNoFileChosen] = useState(false);
    const [previewPfp, setPreviewPfp] = useState();


    const handleFileUpload = (e) => {

        e.preventDefault();
        if (!customPfp) {
            console.log('no file selected');
            setNoFileChosen(true);
            return;
        }
        setNoFileChosen(false);  

        const fd = new FormData();
        fd.append('file', customPfp);
        setPreviewPfp();  

        axios.post('https://httpbin.org/post', fd, {
            headers: {
                'Custom-Header': 'value',
            }
        })
        .then(res =>{
            dispatch(changePfp(res.data.files.file))})
        .catch(err => console.error(err));
        
    }

    const handleFileChange = (e) => {
        setCustomPfp(e.target.files[0]);
        setPreviewPfp(URL.createObjectURL(e.target.files[0]));  
    }



    return (

        <>
        
            <form className={styles.fileUploadWrapper} onSubmit={handleFileUpload}>
                <input id='file' type='file' accept='image/*' onChange={handleFileChange} />
                <label htmlFor='file'>Upload Custom Picture</label>
                <button type='submit'>Update pfp</button>
                {noFileChosen && <p>No File Chosen</p>}
                {previewPfp && <img id={styles.pfpPreview} src={previewPfp} />}
            </form>
        </>
    )
}