import React, { useState, useEffect } from 'react'

export default function Home() {
    const [users, setUsers] = useState(JSON.parse(localStorage.getItem("users")));
    const [search, setSearch] = useState("");
    useEffect(() => {

    }, []); // useEffect is used to handle side effect, parallle works


    return (
        <div>
            <h1>Home Page</h1>

            <hr />
            <br />
            <div className='container mb-5'>
                <input value={search} type="text" onChange={(e) => setSearch(e.target.value)} />
                <button className='mx-3 btn btn-primary' onClick={() => {
                    setUsers(users.filter((user) => user.name.toLowerCase() == search.toLowerCase() || user.email.toLowerCase() == search.toLowerCase()));
                }}>Search</button>
                <button onClick={() => {
                    setSearch("");
                    setUsers(JSON.parse(localStorage.getItem("users")))
                }}>Clear</button>
                <button className='btn btn-warning mx-3' onClick={() => {

                    const arr = [...users];
                    arr.sort((a, b) => a.fees - b.fees);
                    setUsers(arr);

                }}>Low to High</button>
                <button className='btn btn-warning mx-3' onClick={() => {

                    const arr = [...users];
                    arr.sort((a, b) => b.fees - a.fees);
                    setUsers(arr);

                }}>High to Low</button>
            </div>
            <div className='container d-flex gap-2'>
                {
                    users.map((user, i) => <div key={i} className='shadow p-3 rounded m-3'>
                        <h3>{user.name}</h3>
                        <p>{user.email}</p>
                        <p>{user.contact}</p>
                        <p>{user.password}</p>
                        <p>Fees : {user.fees}</p>
                        <button onClick={() => {
                            // 1. create a copy of array
                            // const arr = [...users];
                            // arr.splice(i, 1);
                            // localStorage.setItem("users", JSON.stringify(arr));
                            // setUsers(arr);

                            //2 . filter
                            setUsers(users.filter((u) => u.email != user.email))
                            localStorage.setItem("users", JSON.stringify(users.filter((u) => u.email != user.email)));
                        }} className='btn btn-danger w-100'>Remove</button>
                    </div>)
                }
            </div>
        </div>
    )
}

// auto drive
// office
// sumul

// Home
// useEffect - function calling, data fetching, api calling, result/data ready

