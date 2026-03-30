import React, { useEffect, useState } from 'react'

export default function Home() {

    useEffect(() => {
        fetchProducts();
    }, []);

    const [products, setProducts] = useState([]);

    async function fetchProducts() {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        setProducts(data.products);
        // console.log(products)
    }

    // fetch vs axios

    // axios package
    // const fetchProducts = async () => {

    // }

    const addToCart = (value) => {
        const cartList = JSON.parse(localStorage.getItem("cart")) || [];
        cartList.push(value)
        localStorage.setItem("cart", JSON.stringify(cartList));
    }

    return (
        <div>
            {
                products.map((product, i) => <div key={i}>
                    <p>{product.title}</p>
                    <button onClick={() => addToCart(product)}>Add to Cart</button>
                </div>)
            }
        </div>
    )
}

// api calling - fetch()

// api fetch
// display
// add to cart with local storage
// delete from cart. with local storage.
// with good ui.