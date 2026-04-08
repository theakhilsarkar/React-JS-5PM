import { useState } from 'react'
import axios from 'axios'
import { users_api } from '../utils/api.js'



export default function SignUp() {

    const [user, setUser] = useState({});

    const handleSignup = async () => {
        const res = await axios.post(users_api, user);
        if (res.status == 201) {
            alert("user signup successfully !!");
        } else {
            alert("cant signup user !");
        }
    }

    return (
        <div>
            <div>
                <input onChange={(e) => setUser({ ...user, name: e.target.value })} type="text" placeholder='Full Name' />
            </div>
            <div>
                <input onChange={(e) => setUser({ ...user, email: e.target.value })} type="text" placeholder='Email' />
            </div>
            <div>
                <input onChange={(e) => setUser({ ...user, phone: e.target.value })} type="text" placeholder='Phone' />
            </div>
            <div>
                <input onChange={(e) => setUser({ ...user, password: e.target.value })} type="text" placeholder='Password' />
            </div>
            <div>
                <button onClick={handleSignup}>Sign Up</button>
            </div>
        </div>
    )
}


// signup,signin
// signup
// signin -> if authenticated -> home page

//