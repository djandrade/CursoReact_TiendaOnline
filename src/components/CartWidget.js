import React from 'react';
import {FaShoppingCart} from 'react-icons/fa'
import ItemCount from './ItemCount';

const CartWidget = () => {
    return (
        <div>
            <FaShoppingCart style={{ color:'white' }} />
            <span style={{ color:'white' }}> 2 </span>
        </div>
    );
}

export default CartWidget;