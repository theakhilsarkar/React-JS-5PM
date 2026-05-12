import TodoReducer from "../slices/todo_slice.js";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    todo: TodoReducer,
  },
});

export default store;
