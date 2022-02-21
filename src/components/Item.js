import React from 'react';
import { Card } from 'react-bootstrap';

export const Item = ({ id, name, description, price, pictureUrl }) =>{
    return (
        <div className='col'>
            <Card style={{width: "18rem", height:"430px"}} text='dark' bg='light'>
                <Card.Img height="266px" width="180px" variant="top" src={pictureUrl} />
                <Card.Body>
                    <Card.Title> {name} </Card.Title>
                    <Card.Text> $ {price} </Card.Text>
                    <button type="button" style={{marginTop: 10}} className="btn btn-primary">Detalle</button>
                </Card.Body>
            </Card>
        </div>
    );
}; 
