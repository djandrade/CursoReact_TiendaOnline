import React from 'react';
import { Card } from 'react-bootstrap';

export const Item = ({ id, name, description, price, pictureUrl }) =>{
    return (
        <>
            <Card style={{width: "18rem"}}>
                <Card.Img height="286px" width="180px" variant="top" src={pictureUrl} />
                <Card.Body>
                    <Card.Title style={{color: "black"}}> {name} </Card.Title>
                    <Card.Text style={{color: "black"}}> {description} </Card.Text>
                    <Card.Text style={{color: "black"}}> $ {price} </Card.Text>
                    <button type="button" style={{marginTop: 15}} className="btn btn-primary">Detalle</button>
                </Card.Body>
            </Card>
        </>
    );
}; 
