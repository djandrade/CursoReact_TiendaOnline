import { React, useEffect, useState } from 'react';
import ItemCount from './ItemCount';
import ItemList from './ItemList';

const ItemListContainer = (props) =>{
    const [items, setItems] = useState([]);

    const products = [ 
        { id:1, name:'Babuchas niña', description: 'Babuchas niña unicornio', price: '40000', pictureUrl: "~/assets/BabuchasNiña.png" },
        { id:2, name:'Cepillo', description: 'Cepillo para cabello', price: '15000', pictureUrl: "~/assets/CepilloNiña.png" },
        { id:3, name:'Tendido Hello Kitty', description: 'Tendido para cama doble para niña de Hello Kitty', price: '70000', pictureUrl: "~/assets/TendidoNiña.png" }
    ]

    useEffect(()=>{

        const promiseResult = new Promise((resolve, reject) => {
            setTimeout(() =>{
                resolve(products)
            },2000)
        })

        promiseResult.then(result =>{
            setItems(result);
        })
    },[products])
    
    return (
        <>
            <header>
                <h1>Bienvenidos {props.greeting}</h1>
            </header>
            <div className="container">
                <ItemCount stock="5" initial="1" />
                <br/>
                <ItemList items={items} />
            </div>
        </>   
    )
} 

export default ItemListContainer;