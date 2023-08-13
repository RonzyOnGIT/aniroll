import stlyes from './ProfilePic.module.css';

import { changePfp } from '../../features/isLoggedIn/isLoggedInSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { PfpLoadingSkeleton } from '../loadingSkeleton/PfpLoadingSkeleton';


export const ProfilePic = ({ img }) => {

    const dispatch = useDispatch();
    const [isImageLoading, setIsImageLoading] = useState(true);
    
    const handleImageLoad = () => {
        setIsImageLoading(false);
    }

    const updatePfp = () => {
        dispatch(changePfp(img));
    }
    
    return(
        <>
            <img id={stlyes.dummy} src={img} onLoad={handleImageLoad} />
            {isImageLoading ? <PfpLoadingSkeleton /> : <img id={stlyes.image} src={img} onClick={updatePfp} />}
        </>
    )
}