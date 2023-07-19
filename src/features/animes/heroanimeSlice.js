import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


const heroanime = createSlice({

    name: 'heroanime',
    initialState: {

        heroAnime: {},
        isLoading: true
    },
    reducers: {}

})

export default heroanime.reducer;
export const selectHeroAnime = state => state.heroanime.heroAnime;
export const selectIsHeroAnimeLoading = state => state.heroanime.isLoading;