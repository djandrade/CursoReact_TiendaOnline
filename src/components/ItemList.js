import React from "react";
import { Item } from "./Item";

const ItemList = ({ items }) =>{
    return(
        <>
            <div className="row">
                {
                   items.map(item =>
                        <Item key={item.id} name={item.name} description={item.description} price={item.price} pictureUrl={item.pictureUrl}  />
                   ) 
                }
            </div>
        </>
    )
}

export default ItemList;