import { configureStore } from '@reduxjs/toolkit';
import heroAnimeReducer from '../features/animes/heroanimeSlice';
import isLoggedInReducer from '../features/isLoggedIn/isLoggedInSlice';
import animesReducer from '../features/anime/animeSlice';
import newsReducer from '../features/news/newsSlice';

export default configureStore({
    reducer: {
        heroanime: heroAnimeReducer,
        loggedIn: isLoggedInReducer,
        animes: animesReducer,
        news: newsReducer
    }
})