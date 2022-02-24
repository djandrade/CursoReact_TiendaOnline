import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Item = ({ id, name, price, pictureUrl }) =>{
    return (
        <Col>
            <Card style={{width: "18rem", height:"430px"}} text='dark' bg='light' variant="top">
                <Card.Img height="266px" width="180px" variant="top" src={pictureUrl} />
                <Card.Body>
                    <Card.Title> {name} </Card.Title>
                    <Card.Text> $ {price} </Card.Text>
                    <Card.Link as={Link} to={`/item/${id}`}>
                        <button type='button' style={{marginTop: 15}} className="btn btn-primary">Detalle</button>
                    </Card.Link>
                </Card.Body>
            </Card>
        </Col>
    );
}; 
