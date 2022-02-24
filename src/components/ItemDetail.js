import React from 'react';
import { Card } from 'react-bootstrap';
import ItemCount from './ItemCount';

export const ItemDetail = ({ item }) =>{
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
            <ItemCount stock="5" initial="1" />
        </div>
    );
}; 