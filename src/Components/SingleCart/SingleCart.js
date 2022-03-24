import React from 'react';
import './SingleCart.css'

const SingleCart = (props) => {
    const {img, quantity, price} = props.carts
    return (
        <div className='single-cart'>
            <img src={img} alt="" />
            <div style={{marginBottom: '3px'}}>
            <p><small>Quantity: {quantity}</small></p>
            <p><small>Price: ${price*quantity}</small></p>
            </div>
            <button>d</button>
        </div>
    );
};

export default SingleCart;