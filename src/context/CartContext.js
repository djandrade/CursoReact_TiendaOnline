import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({children}) => {
    const[products, setProducts] = useState([]);

    const isInCart = (id)=>{
        return products.some((prod) => prod.id === id)
    }
 
    const addProduct = (item,quantity)=>{
        let newItem = { ...item, quantity };
        if(!isInCart(item.id)){
            setProducts([...products, newItem]);
        } else{
            console.log("en addproduct", item);
            const productsAux = products;
            const pos = products.findIndex((item) => item.id === newItem.id);
            productsAux[pos].quantity = productsAux[pos].quantity + quantity;
            setProducts(productsAux);
        }
    }

    const removeProduct = (itemId)=>{
        let result = products.filter((p) =>p.id !== itemId);
        setProducts(result);
    }

    const clear = ()=>{
        setProducts([]);
    }

    return(
        <>
            <CartContext.Provider value={{products, addProduct, removeProduct, clear, isInCart}}>
                {children}
            </CartContext.Provider>
        </>
    )
}

export default CartProvider;
