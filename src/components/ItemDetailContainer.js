import { useEffect, useState } from 'react';
import Products from './mocks';
import { ItemDetail } from './ItemDetail';

const ItemDetailContainer = ({positionItem}) =>{
    const [item, setItem] = useState([]);

    useEffect(()=>{
        const getItems = async() =>{
            const response = setTimeout(() =>{
                setItem(Products[positionItem])
            },2000)
    
            response.then(result =>{
                return result;
            })
        }
        
        getItems();
    },[positionItem])
    
    return(
        <>
            <div className="row">
                <ItemDetail item={item} />
            </div>
        </>
    )
} 

export default ItemDetailContainer;