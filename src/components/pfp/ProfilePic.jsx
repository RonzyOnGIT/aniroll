import stlyes from './ProfilePic.module.css';

import { changePfp } from '../../features/isLoggedIn/isLoggedInSlice';
import { useDispatch } from 'react-redux';

export const ProfilePic = ({ img }) => {

    const dispatch = useDispatch();
    
    const updatePfp = () => {
        dispatch(changePfp(img));
    }
    
    return(
        <>
            <img id={stlyes.image} src={img} onClick={updatePfp} />
        </>
    )
}