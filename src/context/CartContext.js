import React from 'react';

const cartInfo = { item:{}, quantity: 0 };
export const CartContext = React.createContext(cartInfo);