import { createSlice } from '@reduxjs/toolkit';

//To do: fix removeAnimeFromWatchlist

import goku from '../../images/pfp/gokupfp.png';

const isLoggedIn = createSlice({
    name: 'isLoggedIn',
    initialState: {
        loggedIn: false,
        name: '',
        pfp: goku,
        watchlist: {},
        currentAnime: {}
    },
    reducers: {
        logIn: (state, action) => {
            state.loggedIn = true;
            state.name = action.payload;
        },
        changePfp: (state, action) => {
            state.pfp = action.payload;
        },
        addAnimeToWatchlist: (state, action) => {
            state.watchlist[action.payload.title] = action.payload;
        },
        removeAnimeFromWatchlist: (state, action) => {
            state.watchlist =  Object.keys(state.watchlist).filter(anime => anime !== action.payload.title);
        },
        switchCurrentAnime: (state, action) => {
            state.currentAnime = action.payload;
        }
    }
})

export default isLoggedIn.reducer;
export const { logIn } = isLoggedIn.actions;
export const { changePfp } = isLoggedIn.actions;
export const { addAnimeToWatchlist } = isLoggedIn.actions;
export const { removeAnimeFromWatchlist } = isLoggedIn.actions;
export const { switchCurrentAnime } = isLoggedIn.actions;
export const selectIsLoggedIn = state => state.loggedIn.loggedIn;
export const selectUsername = state => state.loggedIn.name;
export const selectPfp = state => state.loggedIn.pfp;
export const selectWatchlist = state => state.loggedIn.watchlist;
export const selectCurrentAnime = state => state.loggedIn.currentAnime;
