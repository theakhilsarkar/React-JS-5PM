import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increament, decreament } from '../slices/counter_slice.js'

export default function Counter() {
    const data = useSelector((state) => state.tapper.value)
    const dispatch = useDispatch();
    return (
        <div>
            <h1>{data}</h1>
            <button onClick={() => dispatch(increament())}>++</button>
            <button onClick={() => dispatch(decreament())}>--</button>
        </div>
    )
}
