import logo from '../../images/Logo.svg'
import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className='list'>
                <a href="/shop"><li>Shop</li></a>
                <a href="/order"><li>Order</li></a>
                <a href="/inventory"><li>Inventory</li></a>
                <a href="/about"><li>About</li></a>
            </div>
        </nav>
    );
};

export default Header;