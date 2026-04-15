import React from 'react'
import SignUp from '../screens/SignUp'
import { Routes, Route } from 'react-router'
import HomePage from '../screens/HomePage'
import SignIn from '../screens/SignIn'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<SignUp />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/signin' element={<SignIn />} />
      </Routes>
    </div>
  )
}
