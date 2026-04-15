import React, { useState } from 'react'
import axios from 'axios'
import { users_api } from '../utils/api.js';
import { useNavigate } from 'react-router'

export default function SignIn() {
    const navigate = useNavigate()
    const [user, setUser] = useState({});


    const handleSignIn = async () => {
        const res = await axios.get(users_api);
        const loginUser = res.data.find((e) => e.email == user.email && e.password == user.password)
        if (loginUser) {
            localStorage.setItem("current-user", JSON.stringify(loginUser));
            alert("signin successfully !")
            navigate("/home");
        } else {
            alert("signin failed !")
        }
    }
    return (
        <div>
            <input type="text" placeholder='Email' onChange={(e) => setUser({ ...user, email: e.target.value })} />
            <input type="text" placeholder='Password' onChange={(e) => setUser({ ...user, password: e.target.value })} />
            <button onClick={handleSignIn}>SignIn</button>
        </div>
    )
}
