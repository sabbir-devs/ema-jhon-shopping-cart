import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import SingleCart from '../SingleCart/SingleCart';
import { deleteShoppingCart } from '../../utilities/fakedb';

const Cart = (props) => {
    const {cart} = props
    let total = 0;
    let shipping = 0;
    let tax = 0;
    let grandTotal = 0;
    let quantity = 0;
    for(const product of cart){
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
        tax = (total * 10) / 100;
        grandTotal = total + shipping + tax
    }
    const deleteProducts = () => {
        deleteShoppingCart()
    }
    return (
        <div className='cart'>
            <h2>Order samary</h2>
                <p>Item ordared: <strong>{quantity}</strong></p>
                <p>Total price: <strong>$ {total}</strong></p>
                <p>Total Shipping: <strong>$ {shipping}</strong></p>
                <p>10% Tax: <strong>$ {tax}</strong></p>
                <h3 style={{marginTop: '15px'}}>Grand Total: <strong>$ {grandTotal}</strong></h3>
                <button className='delete' onClick={() => deleteProducts()}>delete <FontAwesomeIcon icon={faArrowRight}/></button>
                <button className='review'>Review order <FontAwesomeIcon icon = {faArrowRight}/></button>
                {
                    cart.map(carts => <SingleCart carts = {carts}></SingleCart>)
                }
        </div>
    );
};

export default Cart;