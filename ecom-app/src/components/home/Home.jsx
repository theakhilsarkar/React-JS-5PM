import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from '../product-card/ProductCard';

export default function Home() {
    useEffect(() => {
        fetchProducts();
    }, []);

    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [isClicked, setClick] = useState(true);

    const fetchProducts = async () => {
        const res = await axios.get("https://dummyjson.com/products");
        setProducts(res.data.products);
    }

    const addToCart = (value) => {
        const cartList = JSON.parse(localStorage.getItem("cart")) || [];
        const res = cartList.findIndex((e) => e.name == value.name); // res = -1
        if (res == -1) { // true
            cartList.push(value)
        }
        if (res != -1) { // false
            cartList[res].qty++; // 
        }
        localStorage.setItem("cart", JSON.stringify(cartList));
    }

    const searchProduct = () => {
        const result = products.filter((product) => product.title.toLowerCase().includes(search.toLowerCase()));
        setProducts(result);
    }

    const sortProducts = () => {
        setClick(!isClicked);
        const copy = [...products];
        copy.sort((a, b) => (isClicked) ? a.price - b.price : b.price - a.price);
        setProducts(copy);
    }

    return (
        <div>
            <div className='my-5'>
                <input onChange={(e) => setSearch(e.target.value)} className='w-25 mx-2' type="text" />
                <button className='btn btn-primary mx-2' onClick={searchProduct}>Search</button>
                <button className='btn btn-primary mx-2' onClick={fetchProducts}>Reset</button>
                <button className='btn btn-primary mx-2' onClick={sortProducts}>Sort</button>
            </div>
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
// total with qty
// duplicate prevent
// searchin and sorting...
// with good ui.

// how can we transfer data from one component to another component

// props :
// react-router : navigation