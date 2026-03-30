import React, { useState } from 'react'

export default function Cart() {

    const [products, setProducts] = useState(JSON.parse(localStorage.getItem("cart")) || []);

    const removeCart = (i) => {
        const carts = JSON.parse(localStorage.getItem("cart"));
        carts.splice(i, 1);
        setProducts(carts);
        localStorage.setItem("cart", JSON.stringify(carts));
    }
    return (
        <div>
            {products.map((product, i) => <div key={i}>
                <p>{product.title}</p>
                <button onClick={() => removeCart(i)}>remove</button>
            </div>)}
        </div>
    )
}


