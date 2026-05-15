import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchTodos,
  postTodos,
  updateTodos,
  deleteTodos,
} from "../slices/todo_slice.js";

export default function Todo() {
  const dispatch = useDispatch();
  const { todos, isLoading, message, error } = useSelector(
    (state) => state.todo,
  );
  useEffect(() => {
    dispatch(fetchTodos());
  }, []);
  return (
    <div>
      <div>
        <button onClick={() => dispatch(deleteTodos("QmHYqt1FoMk"))}>
          Add
        </button>
      </div>
    </div>
  );
}

// react js exam ka exam bahot pass

// task,TODO,ECOM,note,book,library
// CRUD + FILTER
// RTK
// 3 hours

// binary language - human not possible
// programming language - JS
// library - React JS - group/roadmap/flow of creating specific task by specific language
// framwork - Next JS - ready made , direct use to block of code.

// Next JS - SEO + folder structure + frontend/backend + built in routing


