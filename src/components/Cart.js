import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { CartDetail } from './CartDetail';
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { Timestamp, collection, addDoc } from 'firebase/firestore';
import { db } from '../utils/fireBase';

export const Cart = () =>{
    const cartContext = useContext(CartContext);
    const orders = collection(db,'orders');

    function calculateTotal(){
        return cartContext.products.reduce((acc,prod) => acc + prod.quantity * prod.price,0);
    }

    const sendOrder = async (e) =>{
        e.preventDefault();
        let order = {
            buyer: {
                name: e.target[0].value,
                phone: e.target[1].value,
                email: e.target[2].value
            },
            items: cartContext.products,
            total: calculateTotal(),
            date: Timestamp.fromDate(new Date())
        };

        try{
            const newDoc = await addDoc(orders, order);
            console.log("Orden creada exitosamente, Order id: ", newDoc.id);
        } catch (error){
            console.log("Error", error);
        } 
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
                    <header>
                        <h2 className="text-center">Tu carrito de compras</h2>
                    </header>
                    <div style={{float:"left", width:"65%", padding:"20px", display:"inline-block"}}>
                        <div className="d-flex flex-row">
                            <div className="row">
                                {
                                    cartContext.products.map(item =>
                                        <CartDetail key={item.id} id={item.id} name={item.name} price={item.price} pictureUrl={item.pictureUrl} description={item.description} quantity={item.quantity} />
                                    )
                                } 
                            </div>
                        </div>
                    </div>
                    <div style={{float:"left", width:"35%", padding:"5px", display:"inline-block"}}>
                        <Form onSubmit={sendOrder}>
                            <Form.Group>
                                <Form.Label>Nombre completo</Form.Label>
                                <Form.Control type="text" placeholder="Nombre" style={{width:"90%"}}></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Teléfono</Form.Label>
                                <Form.Control type="text" placeholder="Teléfono" style={{width:"90%"}}></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Correo</Form.Label>
                                <Form.Control type="email" placeholder="Correo" style={{width:"90%"}}></Form.Control>
                            </Form.Group>
                            <br />
                            <button className="btn btn-primary" type='submit'>Guardar datos</button>
                            <hr />
                        </Form>
                        <h3 className="my-3"> Valor total: $ {calculateTotal()} </h3>
                    </div>
                </>  
            } 
        </>     
    )
}