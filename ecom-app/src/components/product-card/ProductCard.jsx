import React from 'react'
import { useNavigate } from 'react-router'

export default function ProductCard({ name, image, des, price, addToCart }) {
    const navigate = useNavigate();
    return (
        <div className='w-25 border m-2 p-3 rounded'>
            <img width={200} src={image} alt="" />
            <p className='fs-3'>{name}</p>
            <p>{des}</p>
            <p>{price}</p>
            <button className='btn btn-primary mx-2' onClick={() => addToCart({ name, price, qty: 1 })}>Add to Cart</button>
            <button className='btn btn-primary mx-2' onClick={() => {
                navigate("/detail", { state: { name, image, des, price } })
            }}>View</button>
        </div>
    )
}

// prop(component) = parameter(function)

// prop - to get values from outside the component
// props are imutable or we can not change prop its only readable.

// prop driling.