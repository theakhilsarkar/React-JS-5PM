import React, { useState } from 'react'

// array = to store multiple values of same datatype.
// object(hashmap) = to stire multiple values of different data type or different behavior.

// [{},{},{},""]

export default function Form() {
    const [user, setUser] = useState({});

    const handleSubmit = () => {
        localStorage.setItem("user", JSON.stringify(user));
        alert("Form Submitted !!")
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
                            className="form-control"
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
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">
                            Check me out
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>

            </div>
        </div>
    )
}
