import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
const Product = (props) => {
    const {category, name, seller, price, ratings, img} = (props.product);
    return (
        <div className='single-product'>
            <img src={img} alt={name} />
            <h3>{name}</h3>
            <h4>Price: ${price}</h4>
            <p style={{marginTop:'30px'}}>Manufacturer: {seller}</p>
            <p>Category: {category}</p>
            <p>Rating: {ratings} star</p>
            <button onClick={() => props.handleAddToCart(props.product)}>Add To Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default Product;