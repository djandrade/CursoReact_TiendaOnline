import React from 'react';
import ItemCount from './ItemCount';

const items = (props) =>{
    return (
        <>
            <h1>Bienvenidos {props.greeting}</h1>
            <ItemCount stock="5" initial="1" />
        </>
    )
} 

export default items;