import { createSlice } from '@reduxjs/toolkit';

const isLoggedIn = createSlice({
    name: 'isLoggedIn',
    initialState: {
        loggedIn: false,
        name: ''
    },
    reducers: {
        logIn: (state, action) => {
            state.loggedIn = true;
            state.name = action.payload;
        }
    }
})

export default isLoggedIn.reducer;
export const { logIn } = isLoggedIn.actions;
export const selectIsLoggedIn = state => state.loggedIn.loggedIn;
export const selectUsername = state => state.loggedIn.name;