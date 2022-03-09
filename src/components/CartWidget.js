import React, { useContext } from 'react';
import {FaShoppingCart} from 'react-icons/fa';
import { CartContext } from '../context/CartContext';


export const CartWidget = () => {
    const cartContext = useContext(CartContext);
    let numberItems = 0;

    if(cartContext.products.length !== 0){
        cartContext.products.forEach(element => {
            numberItems = numberItems + element.quantity;
        });
    }

    return (
        <div>
            <FaShoppingCart style={{ color:'white' }} />
            <span style={{ color:'white' }}> {numberItems} </span>
        </div>
    );
};