import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from '../product-card/ProductCard';

export default function Home() {

    useEffect(() => {
        fetchProducts();
    }, []);

    const [products, setProducts] = useState([]);

    // async function fetchProducts() {
    //     const res = await fetch("https://dummyjson.com/products");
    //     const data = await res.json();
    //     setProducts(data.products);
    //     // console.log(products)
    // }

    // fetch vs axios

    // axios package
    const fetchProducts = async () => {
        const res = await axios.get("https://dummyjson.com/products");
        setProducts(res.data.products);
    }

    const addToCart = (value) => {
        console.log("function called...")
        const cartList = JSON.parse(localStorage.getItem("cart")) || [];
        cartList.push(value)
        console.log(cartList)
        localStorage.setItem("cart", JSON.stringify(cartList));
    }

    return (
        <div>
            {
                products.map((product, i) => <ProductCard key={i} name={product.title} image={product.images[0]} des={product.description} price={product.price} addToCart={addToCart} />)
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

// how can we transfer data from one component to another component

// props :
// react-router : navigation