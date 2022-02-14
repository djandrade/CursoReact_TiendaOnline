import React, { useState } from 'react';


const ItemCount = ({stock, initial}) => {
    const [quantity, setQuantity] = useState(parseInt(initial));
    const [limit, setLimit] = useState(stock);

    const handledAdd = () => {
        if(quantity < limit){
            setQuantity(quantity+1)
        }  
    }

    const handledSubtrack = () => {
        if(quantity > 0){
            setQuantity(quantity-1)
        }
    }

    const onAdd = () => {
        console.log("Numero de productos seleccionados: ",quantity);
        console.log("Numero de productos en stock: ",stock-quantity);
        setLimit(stock-quantity);
    }

    return (
        <>
            <div>
                <button disabled={quantity === 0} onClick={handledSubtrack} className="btn btn-primary btn-sm"> - </button>
                <span className="mx-2"> {quantity} </span>
                <button disabled={quantity === limit} onClick={handledAdd} className="btn btn-primary btn-sm"> + </button>
            </div>
            <div>
            <button className="btn btn-primary btn-sm btn-block" onClick={onAdd}> Agregar al carrito </button>
            </div>
        </>
    );
}

export default ItemCount;