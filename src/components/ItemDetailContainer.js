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
            {
                Object.keys(item).length === 0 
                ?   <>
                        <div className="d-flex justify-content-center">
                            <div className="spinner-border text-primary m-5" role="status"></div>
                        </div>
                    </>
                :
                <>
                    <div className="container">
                        <ItemDetail item={item} />
                    </div>
                </>
            }
        </>
    )
} 