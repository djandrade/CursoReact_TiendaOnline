import React, { useState } from 'react';


export const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(parseInt(initial));

    const handledAdd = () => {
        if(quantity < stock){
            setQuantity(quantity+1)
        }  
    }

    const handledSubtrack = () => {
        if(quantity > 0){
            setQuantity(quantity-1)
        }
    }

    return (
        <>
            <div>
                <button disabled={quantity === 0} onClick={handledSubtrack} className="btn btn-primary btn-sm" style={{marginLeft:"150px", marginTop:"10px", width:"35px"}}> - </button>
                <span className="mx-3"> {quantity} </span>
                <button disabled={quantity === stock} onClick={handledAdd} className="btn btn-primary btn-sm" style={{marginLeft:"15px", marginTop:"10px", width:"35px"}}> + </button>
            </div>
            <div>
                <button className="btn btn-primary btn-sm btn-block" onClick={()=>onAdd(quantity)} style={{marginLeft:"125px", marginTop:"25px", width:"160px"}}> Agregar al carrito </button>
            </div>
        </>
    );
}
