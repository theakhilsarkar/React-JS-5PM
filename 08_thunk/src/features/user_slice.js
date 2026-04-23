import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"

export const fetchUsers = createAsyncThunk("user/fetch", async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/user");
    console.log(res.data.length)
    return res.data;
})

const initialState = {
    error: null,
    status: "idle", // fullfilled, loading, rejected
    users: []
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {}, // sync 
    extraReducers: (builder) => { // async
        builder.addCase(fetchUsers.pending, (state, action) => {
            state.status = "loading"
        })
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.users = action.payload;
            state.status = "success";
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.error = action.error.message;
            state.status = "failed";
        })
    }
})

export default userSlice.reducer;