import { configureStore } from '@reduxjs/toolkit';
import heroAnimeReducer from '../features/animes/heroanimeSlice';
import isLoggedInReducer from '../features/isLoggedIn/isLoggedInSlice';

export default configureStore({
    reducer: {
        heroanime: heroAnimeReducer,
        loggedIn: isLoggedInReducer
    }
})