import React, { useState } from 'react'
import { useNavigate } from 'react-router'

// array = to store multiple values of same datatype.
// object(hashmap) = to stire multiple values of different data type or different behavior.

// [{},{},{},""]

export default function Form() {

    const navigate = useNavigate();

    const [user, setUser] = useState({});
    const [check, setCheck] = useState(false);
    const [style, setStyle] = useState({ email: false });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Form Validation = Form Input Box - checking - added and valid
        console.log(user.email)
        if (user.email == undefined || user.email == "") {
            setStyle({ ...style, email: true })
            // alert("Email is required !");
        }
        else if (user.name == undefined || user.name == "") {
            alert("name is required !")
        }
        else {
            const users = JSON.parse(localStorage.getItem("users")) || []; // []
            users.push(user);
            localStorage.setItem("users", JSON.stringify(users));
            alert("Form Submitted !!")
            navigate("/home");
        }
    }

    return (
        <div style={{ height: "100vh" }} className='container d-flex justify-content-center align-items-center'>
            <div className='col-4'>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                            Full Name
                        </label>
                        <input
                            onChange={(e) => setUser({ ...user, name: e.target.value })}
                            type="text"
                            className="form-control"
                            id="name"
                            aria-describedby="emailHelp"
                        />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                            Email address
                        </label>
                        <input
                            onChange={(e) => setUser({ ...user, email: e.target.value })}
                            type="email"
                            className={`form-control border border-1 ${style.email == false ? "" : "border-danger"}`}
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                        />
                        <div id="emailHelp" className="form-text">
                            We'll never share your email with anyone else.
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="number" className="form-label">
                            Contact
                        </label>
                        <input
                            onChange={(e) => setUser({ ...user, contact: e.target.value })}

                            type="number"
                            className="form-control"
                            id="number"
                            aria-describedby="emailHelp"
                        />

                    </div>

                    <div className="mb-3">
                        <label htmlFor="fees" className="form-label">
                            Fees
                        </label>
                        <input
                            onChange={(e) => setUser({ ...user, fees: e.target.value })}
                            type="number"
                            className="form-control"
                            id="fees"
                            aria-describedby="emailHelp"
                        />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">
                            Password
                        </label>
                        <input
                            onChange={(e) => setUser({ ...user, password: e.target.value })}

                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                        />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" checked={check} onChange={() => setCheck(!check)} className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">
                            Check after reading all Terms & Condition..
                        </label>
                    </div>
                    <button type="submit" className={`btn btn-primary ${check ? "" : "disabled"}`}>
                        Submit
                    </button>
                </form>

            </div>
        </div>
    )
}


// alert

// toast

// module
// core/built in
// used define,custom
// third-party module -> npm

// DOM = Is a tree like structure of html elements.

// real DOM
// virtual DOM - is a copy of real dom.

// only specific component update when state change
