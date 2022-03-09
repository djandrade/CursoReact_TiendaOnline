import { useEffect, useState } from 'react';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../utils/fireBase';
import { ItemDetail } from './ItemDetail';
import { useParams } from 'react-router-dom';

export const ItemDetailContainer = () =>{
    const {id} = useParams();
    const [item, setItem] = useState([]);

    useEffect(()=>{
        const getData = async() =>{
            const queryDoc = doc(db,'products',id);
            const response = await getDoc(queryDoc);
            const dataDoc = {id:response.id, ...response.data()};    

            setItem(dataDoc);
        }

        getData();
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