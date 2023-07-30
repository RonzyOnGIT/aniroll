import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const baseApi = 'https://api.jikan.moe/v4/'

export const fetchAnimesForSection = createAsyncThunk(
    'animes/fetchAnimes',
    async(route) => {
        const response = await fetch(baseApi + route);
        const json = await response.json();
        const data = json.data;
        const obj = {data: data, name: route};
        return obj;
    }
)

const animes = createSlice({
    name: 'animes',
    initialState: {
        genres: {},
    },
    reducers: {},
    extraReducers: (builder) => {
        builder 
            .addCase(fetchAnimesForSection.fulfilled, (state, action) => {
                state.genres = {...state.genres, [action.payload.name]: { animes: action.payload.data, isLoading: false}, isLoading: false}
            })
            .addCase(fetchAnimesForSection.rejected, (state, action) => {
                state.genres[action.payload.name] = {isLoading: false, animes: {}, failedToLoad: true};
                state.genres.isLoading = false;
            })
    }
})

export default animes.reducer;
export const selectAnime = state => state.genres;
