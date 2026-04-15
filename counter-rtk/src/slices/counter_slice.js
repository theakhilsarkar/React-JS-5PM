import { createSlice } from '@reduxjs/toolkit' // 1. 

const initialState = { value: 10 }; // default value

const counterSlice = createSlice({ // 2.
    name: "counter", // 3.
    initialState, // 4
    // reducers hold all logic to update state
    reducers: {
        increament: (state) => { state.value += 1 },
        decreament: (state) => { state.value -= 1 },
    }
});

export default counterSlice.reducer;
export const { increament, decreament } = counterSlice.actions;