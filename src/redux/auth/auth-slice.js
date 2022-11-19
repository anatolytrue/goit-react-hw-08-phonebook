import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: { name: null, email: null },
        token: null,
    },
    reducers: {
        setUser(state, action) {
            state.user = action.payload.user;
        },
        setSignIn(state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        setLogIn(state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        setLogOut(state, _) {
            state.user = {
                name: null, email: null
            };
            state.token = null;
        },
    },
});

export const {setUser, setSignIn, setLogIn, setLogOut } = authSlice.actions;

// export default authSlice;