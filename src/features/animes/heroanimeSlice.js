import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const fetchHeroAnime = createAsyncThunk(
    'heroanime/fetchHeroAnime',
    async () => {
        const response = await fetch('https://api.jikan.moe/v4/top/anime?filter=airing&limit=6');
        const json = await response.json();
        console.log(json.data);
        return json.data;
    }
)

const heroanime = createSlice({

    name: 'heroanime',
    initialState: {
        heroAnime: {},
        isLoading: true
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchHeroAnime.pending, state => {
                state.isLoading = true;
                state.heroAnime = {};
            })
            .addCase(fetchHeroAnime.fulfilled, (state, action) => {
                state.heroAnime = action.payload;
                state.isLoading = false;
            })
            .addCase(fetchHeroAnime.rejected, (state) => {
                state.isLoading = false;
            })
    }

})

export default heroanime.reducer;
export const selectHeroAnime = state => state.heroanime.heroAnime;
export const selectIsHeroAnimeLoading = state => state.heroanime.isLoading;