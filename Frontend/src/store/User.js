import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: JSON.parse(localStorage.getItem('user')) || {}
}

const userSlice = createSlice({
    name: 'User',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            localStorage.setItem('user', JSON.stringify(state.user)); // Save user to localStorage
        }
    }
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
