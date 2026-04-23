import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../features/user_slice.js'

export default function Users() {
    const dispatch = useDispatch();
    const state = useSelector(state => state.user)
    useEffect(() => {
        dispatch(fetchUsers())
    }, [])
    return (
        <div>
            <div>
                {state.status}
            </div>
            <div>
                {state.error}
            </div>
            {
                state.users.map((user, i) => <div key={i}>
                    {user.name}
                </div>)
            }
        </div>
    )
}
