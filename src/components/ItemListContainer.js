import { React, useEffect, useState } from 'react';
import { ItemList } from './ItemList';
import Products from './mocks';
import { useParams } from 'react-router-dom';

export const ItemListContainer = () =>{
    const {id} = useParams();
    const [items, setItems] = useState([]);

    function filterProducts(item)
    {
        return item.categoryId === id;
    }

    useEffect(()=>{

        const promiseResult = new Promise((resolve, reject) => {
            setTimeout(() =>{
                if(typeof id === 'undefined')
                {
                    resolve(Products);
                }
                else{
                    const productsFilter = Products.filter(filterProducts);
                    resolve(productsFilter);
                }
            },2000)
        })

        promiseResult.then(result =>{
            setItems(result);
        })
    })

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