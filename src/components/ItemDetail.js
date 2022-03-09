import React, { useState, useContext } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ItemCount } from './ItemCount';
import { CartContext } from '../context/CartContext';

export const ItemDetail = ({ item }) =>{

    const [quantity, setQuantity] = useState(0);
    const cartContext = useContext(CartContext);
    
    const onAddDetail = (quantityToAdd) => {
        setQuantity(quantityToAdd);
    }

    return (
        <div>
            <Card border="primary" style={{ width: '30rem' }} >
                <Card.Img height="266px" width="180px" position="top" src={item.pictureUrl} />
                <Card.Body>
                    <Card.Title> {item.name} </Card.Title>
                    <Card.Text> {item.description} </Card.Text>
                    <Card.Text> $ {item.price} </Card.Text>
                </Card.Body>
            </Card>
            <ItemCount stock="5" initial="0" onAdd={(quantityToAdd)=> onAddDetail(quantityToAdd)} />
            <Link to="/cart" className={` ${quantity === 0 ? "d-none": "d-md-block"}`}>
                <button onClick={() => cartContext.addProduct(item,quantity)} className="btn btn-primary btn-sm" style={{marginLeft:"110px", marginTop:"15px", width:"185px"}}> Terminar compra </button>
            </Link>
        </div>
    );
}; 