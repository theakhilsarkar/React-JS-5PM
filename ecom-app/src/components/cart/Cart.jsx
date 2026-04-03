import React, { useState, useEffect } from 'react'

export default function Cart() {

    const [products, setProducts] = useState(JSON.parse(localStorage.getItem("cart")) || []);
    const [total, setTotal] = useState(0);

    const removeCart = (i) => {
        const carts = JSON.parse(localStorage.getItem("cart"));
        carts.splice(i, 1);
        setProducts(carts);
        localStorage.setItem("cart", JSON.stringify(carts));
    }

    const countTotal = () => {
        console.log("----")
        let sum = 0;
        products.forEach(element => {
            sum = sum + (element.qty * element.price);
        });
        setTotal(sum);
    }

    useEffect(() => {
        countTotal();
        // 1. component re-render
        // 2. state mentioned in dependency array will update
    }, [products]) // [state]

    return (
        <div className='p-5'>
            {products.map((product, i) => <div key={i}>
                <p>{product.name}</p>
                <p className='fs-4'>Qty: {product.qty}</p>
                <p className='fs-4'>Price: {product.price}</p>
                <button onClick={() => removeCart(i)}>remove</button>
            </div>)}
            <div>
                <h2>Total: {total} </h2>
            </div>
        </div>
    )
}


// api
// JSON SERVER

// CONTEXT API
// REDUX TOOLKIT
//