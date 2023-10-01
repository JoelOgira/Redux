import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: "1", name: "Peter Pan" },
    { id: "2", name: "Hercules" },
    { id: "3", name: "Pocahontas" }
]

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {

    }
});

export const selectAllUsers = (state) => state.users;

export default userSlice.reducer;