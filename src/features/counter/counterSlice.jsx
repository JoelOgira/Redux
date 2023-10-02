import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        add: (state) => {
            state.count += 1;
        },
        subtract: (state) => {
            state.count -= 1;
        },
        reset: (state) => {
            state.count = 0
        },
        addByAmount: (state, action) => {
            state.count += action.payload;
        }
    }
});

export const { add, subtract, reset, addByAmount } = counterSlice.actions;

export default counterSlice.reducer;