import React from "react";
import { Row } from "react-bootstrap";
import { Item } from "./Item";

export const ItemList = ({items}) =>{
    return(
        <>
            <Row xs={1} md={3} className="g-4">
                {
                   items.map(item =>
                        <Item key={item.id} id={item.id} name={item.name} price={item.price} pictureUrl={item.pictureUrl} />
                   ) 
                }
            </Row>
        </>
    )
}