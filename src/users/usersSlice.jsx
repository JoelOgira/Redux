import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: "1", name: "Tony Stark" },
    { id: "2", name: "Steve Rodgers" },
    { id: "3", name: "Bruce Burner" },
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {

    }
});

export const selectAllUsers = state => state.users;

export default usersSlice.reducer;









































// import { createSlice } from "@reduxjs/toolkit";

// const initialState = [
// {id: "0", name: "Tony Stark"},
// {id: "1", name: "Steve Rodgers"},
// {id: "2", name: "Bruce Burner"},
//     {id: "3", name: "Thor"},
//     {id: "4", name: "Loki"},
// ]

// const usersSlice = createSlice({
//     name: 'users',
//     initialState,
//     reducers: {

//     }
// })

// export const selectAllUsers = state => state.users;

// export default usersSlice.reducer;