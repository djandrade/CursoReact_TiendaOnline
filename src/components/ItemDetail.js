import React from 'react';
import { Card } from 'react-bootstrap';

export const ItemDetail = ({ item }) =>{
    return (
        <div>
            <Card bg='light' style={{ width: '35rem' }} text='dark'>
                <Card.Img height="266px" width="180px" position="top" src={item.pictureUrl} />
                <Card.Body>
                    <Card.Title> {item.name} </Card.Title>
                    <Card.Title> {item.description} </Card.Title>
                    <Card.Text> $ {item.price} </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}; 