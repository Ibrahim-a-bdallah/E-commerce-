import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    token: null,
    isAuthenticated: false,
    loading: false,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken(state, action) {
            state.token = action.payload;
            state.loading = false;
            state.error = null;
        },
    },
});

export const { setToken } = authSlice.actions;
export default authSlice.reducer;