import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/user_slice.js'

const store = configureStore({
    reducer: {
        user: userReducer
    }
})

export default store;