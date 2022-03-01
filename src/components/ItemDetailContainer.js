import { useEffect, useState } from 'react';
import Products from './mocks';
import { ItemDetail } from './ItemDetail';
import { useParams } from 'react-router-dom';

export const ItemDetailContainer = () =>{
    const {id} = useParams();
    const [item, setItem] = useState([]);
    
    useEffect(()=>{

        const getItems = async() =>{
            const response = await Products[id-1];
            setTimeout(() =>{
                setItem(response);
            },2000) 
        }

        getItems()
    },[id]) 

    return(
        <>
            <div className="container">
                <ItemDetail item={item} />
            </div>
        </>
    )
} 