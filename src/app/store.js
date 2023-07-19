import { configureStore } from '@reduxjs/toolkit';
import heroAnimeReducer from '../features/animes/heroanimeSlice';

export default configureStore({
    reducer: {
        heroanime: heroAnimeReducer
    }
})