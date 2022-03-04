import { useState } from 'react';
import {CartContext} from '../context/CartContext';

export const CustomContext = ({children}) => {
    const[products, setProducts] = useState([]);

    const isInCart = (id)=>{
        if(products.includes(id)){
            return true;
        }
    }
 
    const addProduct = (item,quantity)=>{
        if(!isInCart(item.id)){
            setProducts([...products, {item:item, quantity:quantity}]);
        }
    }

    const removeProduct = (itemId)=>{
        if(isInCart(itemId)){
            const index = products.findIndex(p =>p.items.id === itemId);
            products.splice(index,1);
        }
        return products;
    }

    const clear = ()=>{
        products.splice(0,products.length);
        return products;
    }

    return(
        <>
            <CartContext.Provider value={{products, addProduct, removeProduct, clear}}>
                {children}
            </CartContext.Provider>
        </>
    )
}
