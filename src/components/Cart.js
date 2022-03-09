import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { CartDetail } from './CartDetail';
import { Link } from 'react-router-dom';

export const Cart = () =>{
    const cartContext = useContext(CartContext);

    function calculateTotal(){
        return cartContext.products.reduce((acc,prod) => acc + prod.quantity * prod.price,0);
    }
    
    return(
        <>
            { 
                cartContext.products.length === 0 
                ?   <>
                        <div className="HomeView">
                            <header className="HomeView-header" style={{marginLeft:"250px", marginTop:"250px"}}>
                                <h1>No hay productos en el carrito</h1>
                                <Link to="/" className="btn btn-success" style={{marginLeft:"150px"}}>Ir a comprar</Link>
                            </header>
                        </div>
                    </>
                : 
                <>
                    <h2 className="text-center">Tu carrito de compras</h2>
                    <hr />
                    <div className="d-flex justify-content-center">
                        <div className="row">
                            {
                                cartContext.products.map(item =>
                                    <CartDetail key={item.id} id={item.id} name={item.name} price={item.price} pictureUrl={item.pictureUrl} description={item.description} quantity={item.quantity} />
                                )
                            } 
                        </div>
                    </div>
                    <hr />
                    <h3 className="my-3"> Valor total: $ {calculateTotal()} </h3>
                </>  
            } 
        </>     
    )
}