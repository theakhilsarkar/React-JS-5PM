import React from 'react'
import { useLocation } from 'react-router'

export default function DetailPage() {
    const { state } = useLocation();

    console.log(state)
    return (
        <div>
            <h1>Detail Page</h1>
            <p>{state.name}</p>

        </div>
    )
}
