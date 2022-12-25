import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    email: null,
    token: null,
    id: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.id = action.payload.id;
        },
        removeUser(state) {
            state.email = null;
            state.token = null;
            state.id = null;
            localStorage.clear();
        },
    },
});

const {actions, reducer} = userSlice;

export default reducer;
export const {
    setUser,
    removeUser
} = actions;
