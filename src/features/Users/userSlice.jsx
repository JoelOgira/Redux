import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {id: 1, name: "Tony Stark"},
    {id: 2, name: "Peter Parker"},
    {id: 3, name: "Steve Rodgers"}
];

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {

    }
});

export const selectAllUsers =  state => state.users;

export default usersSlice.reducer;