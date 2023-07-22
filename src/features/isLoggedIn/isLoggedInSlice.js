import { createSlice } from '@reduxjs/toolkit';

const isLoggedIn = createSlice({
    name: 'isLoggedIn',
    initialState: false,
    reducers: {
        logIn: (state) => {
            return state = true;
        }
    }
})

export default isLoggedIn.reducer;
export const { logIn } = isLoggedIn.actions;
export const selectIsLoggedIn = state => state.loggedIn;