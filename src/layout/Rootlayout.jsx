import { Navbar } from '../components/navbar/Navbar';
import { Outlet } from 'react-router-dom';


export const Rootlayout = () => {

    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}