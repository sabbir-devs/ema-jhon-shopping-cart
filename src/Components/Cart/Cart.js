import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Cart = (props) => {
    console.log(props.cart[0])
    return (
        <div>
            <h2>Order samary</h2>
                <p>Item ordared: <strong>{}</strong></p>
                <p>Total price: <strong>$ {0}</strong></p>
                <p>Total Shopping charge: <strong>$ {0}</strong></p>
                <p>Tax: <strong>$ {0}</strong></p>
                <h3>Grand Total: <strong>$ {0}</strong></h3>
                <button className='delete'>delete <FontAwesomeIcon icon={faArrowRight}/></button>
                <button className='review'>Review order <FontAwesomeIcon icon = {faArrowRight}/></button>
        </div>
    );
};

export default Cart;