import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
import Cart from '../Cart/Cart';

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    const handleAddToCart = (product) => {
        setCart([...cart, product])
        console.log(cart)

    }
    
    
    return (
        <div className='shop'>
            <div className="products-container">
                {
                    products.map(product => <Product 
                        product = {product} 
                        key={product.id} 
                        handleAddToCart = {handleAddToCart}
                        ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart = {cart}></Cart>
                {/* <h2>Order samary</h2>
                <p>Item ordared: <strong>{cart.length}</strong></p>
                <p>Total price: <strong>$ {0}</strong></p>
                <p>Total Shopping charge: <strong>$ {0}</strong></p>
                <p>Tax: <strong>$ {0}</strong></p>
                <h3>Grand Total: <strong>$ {0}</strong></h3>
                <button className='delete'>delete <FontAwesomeIcon icon={faArrowRight}/></button>
                <button className='review'>Review order <FontAwesomeIcon icon = {faArrowRight}/></button> */}
            </div>
        </div>
    );
};

export default Shop;