import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, removeTodo, updateTodo } from '../features/todo_slice.js'

export default function Todo() {
    const todoList = useSelector((state) => state.todo.value)
    const dispatch = useDispatch()

    const [text, setText] = useState("")
    const [isUpdate, setUpdate] = useState({ index: -1, status: false });
    return (
        <div className='container d-flex justify-content-center'>
            <div className='col-9'>
                <div className='d-flex justify-content-around px-3 py-5 rounded shadow m-3'>
                    <input value={text} onChange={(e) => setText(e.target.value)} placeholder='Workout, Read Book etc..' className='w-50 p-3' type="text" />
                    <button onClick={() => {
                        console.log(isUpdate.status)
                        console.log(isUpdate.index)
                        console.log(text)
                        dispatch(isUpdate.status ? updateTodo({ text, index: isUpdate.index }) : addTodo({ text, status: false }))
                    }} className={`btn ${isUpdate.status ? "btn-warning" : "btn-primary"} w-25`}>{isUpdate.status ? "Update Todo" : "Add Todo"}</button>
                </div>
                <div style={{ height: "600px" }} className='d-flex flex-column p-3 m-3 mt-5 rounded shadow'>
                    {
                        todoList.map((todo, i) => <div key={i} className={`p-4 m-2 shadow rounded d-flex justify-content-between border ${todo.status ? "border-success" : "border-danger"}`}>
                            <span className='fs-5'>{todo.text}</span>
                            <span>
                                <button onClick={() => {
                                    setText(todo.text)
                                    setUpdate({ index: i, status: true })
                                }} className='btn btn-warning mx-2'>Edit</button>
                                <button onClick={() => dispatch(removeTodo(i))} className='btn btn-danger mx-2'>Remove</button>
                                <button className='btn btn-success mx-2'>Done</button>
                            </span>
                        </div>)
                    }
                </div>
            </div>
        </div>
    )
}
