import { createSlice } from '@reduxjs/toolkit';

//To do: fix removeAnimeFromWatchlist
//issue to fix: when removing anime from watchlist, only the titles of the animes remain

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
            //action.payload is an object of the anime
            state.watchlist[action.payload.title] = action.payload;
        },
        removeAnimeFromWatchlist: (state, action) => {
            delete state.watchlist[action.payload.title];
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
