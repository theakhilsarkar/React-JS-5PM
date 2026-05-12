import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { todo_api } from "../utils/api.js";

export const fetchTodos = createAsyncThunk("todos/get", async () => {
  const res = await axios.get(todo_api);
  return res.data;
});
export const postTodos = createAsyncThunk("todos/post", async (data) => {
  const res = await axios.post(todo_api, data);
  return "Todo added successfully!";
});
export const updateTodos = createAsyncThunk("todos/put", async (data) => {
  const res = await axios.put(todo_api + "/" + data.id, data);
  return "Todo updated successfully !";
});
export const deleteTodos = createAsyncThunk("todos/delete", async (id) => {
  const res = await axios.delete(todo_api + "/" + id);
  return "Todo deleted successfully !";
});

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
    isLoading: "idle",
    error: null,
    message: "",
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state, action) => {
        state.isLoading = "Loading";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.todos = action.payload;
        state.isLoading = "Success";
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.isLoading = "failed";
        state.error = action.error.message;
      })

      .addCase(postTodos.pending, (state, action) => {
        state.isLoading = "Loading";
      })
      .addCase(postTodos.fulfilled, (state, action) => {
        state.isLoading = "Success";
        state.message = action.payload;
      })
      .addCase(postTodos.rejected, (state, action) => {
        state.error = action.error.message;
      })

      .addCase(updateTodos.pending, (state, action) => {
        state.isLoading = "Loading";
      })
      .addCase(updateTodos.fulfilled, (state, action) => {
        state.isLoading = "Success";
        state.message = action.payload;
      })
      .addCase(updateTodos.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(deleteTodos.pending, (state, action) => {
        state.isLoading = "Loading";
      })
      .addCase(deleteTodos.fulfilled, (state, action) => {
        state.isLoading = "Success";
      })
      .addCase(deleteTodos.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default todoSlice.reducer;
