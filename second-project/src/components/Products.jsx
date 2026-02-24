import { products } from '../products.js'
import { useState, useEffect } from 'react'

const Products = () => {
    const [total, setTotal] = useState(0);

    // useEffect is also a react hook to handle side effects
    // its prevent unneccsary re-rendering of components.
    useEffect(() => {
        countTotal();
    }, [])

    const countTotal = () => {
        let sum = 0;
        products.forEach((product) => {
            sum = sum + product.price;
        })
        setTotal(sum);
    }

    return <>
        <div className='card'>
            <p className='title'>Total: {total}</p>
        </div>
        {
            products.map((product) => <div className='card' key={product.id}>
                <p className='title'>{product.title}</p>
                <p className='price'>{product.price}</p>
            </div>)
        }
    </>
}

export default Products;

// when state update, component will re-render.