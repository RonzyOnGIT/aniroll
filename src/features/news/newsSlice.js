import { createAsyncThunk } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';



const newsFeed = createSlice({
    name: 'newsfeed',
    initialState: {
        news: [],
        isLoading: true,
        failedToLoad: false
    }
})


export default newsFeed.reducer; 
export const selectAnimeNewsFeed = state => state.newsFeed.news;
export const selectIsLoading = state => state.newsFeed.isLoading;
export const selectFailedToLoad = state => state.newsFeed.failedToLoad;