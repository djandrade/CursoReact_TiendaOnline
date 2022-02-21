import { React, useEffect, useState } from 'react';
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import Products from './mocks';
import ItemDetailContainer from './ItemDetailContainer';

const ItemListContainer = (props) =>{
    const [items, setItems] = useState([]);

    useEffect(()=>{

        const promiseResult = new Promise((resolve, reject) => {
            setTimeout(() =>{
                resolve(Products)
            },2000)
        })

        promiseResult.then(result =>{
            setItems(result);
        })
    })
    
    return (
        <>
            <header>
                <h1>Bienvenidos {props.greeting}</h1>
            </header>
            <div className="container">
                <ItemCount stock="5" initial="1" />
                <br/>
                <ItemList items={items} />
                <br />
                <ItemDetailContainer positionItem={0}/>
            </div>
        </>   
    )
} 

export default ItemListContainer;