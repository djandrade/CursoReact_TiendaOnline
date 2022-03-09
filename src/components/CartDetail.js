import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { CartContext } from '../context/CartContext';
import {BsFillTrashFill} from 'react-icons/bs';

export const CartDetail = ({id, name, pictureUrl, description, price, quantity }) =>{
    const cartContext = useContext(CartContext);

    return (
        <>
            <Card style={{ width:"22rem"}}>
               <Card.Img height="500px" width="450px" variant="top" src={pictureUrl} />
               <Card.Body>
                   <Card.Title style={{ color: "black" }}>{name}</Card.Title>
                   <Card.Subtitle className='mb-2 text-muted'>{description}</Card.Subtitle>
                   <Card.Text>$ {price}</Card.Text>
                   <Card.Text>Cantidad: {quantity}</Card.Text>
               </Card.Body>
               <button className="btn btn-danger" onClick={() => cartContext.removeProduct(id)}>
                    <BsFillTrashFill />
                </button>
               <hr />
           </Card>
        </>
    );
}