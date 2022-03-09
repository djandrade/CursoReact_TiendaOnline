import { React, useEffect, useState } from 'react';
import { ItemList } from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../utils/fireBase';

export const ItemListContainer = () =>{
    const {id} = useParams();
    const [items, setItems] = useState([]);

    useEffect(()=>{
        let response = [];
        
        const getData = async() =>{
            
            const query = collection(db,'products');
            response = await getDocs(query);
            const dataProducts = response.docs.map(doc =>{ return{id: doc.id, ...doc.data()}});

            if(typeof id === 'undefined')
            {
                setItems(dataProducts);
            }
            else{
                const productsFilter = dataProducts.filter((p) =>p.categoryId === id);
                setItems(productsFilter);
            }
        }

        getData();
    },[id]);

    return (
        <>
            <header>
                <h1>Bienvenidos a su tienda un millon de ilusiones...!</h1>
            </header>
            {
                items.length === 0 
                ?   <>
                        <div className="d-flex justify-content-center">
                            <div className="spinner-border text-primary m-5" role="status"></div>
                        </div>
                    </>
                :
                <>
                    
                    <br />
                    <div className="container">
                        <ItemList items={items} />
                    </div>
                </>
            }
        </>   
    )
}