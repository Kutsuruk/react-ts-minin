import React from "react";
import {IProduct} from "../models";

interface ProductProps {
    product: IProduct
}

const  Product = (props: ProductProps) => {
    return(
        <div className='border py-2 px-4 rounded flex flex-col items-center mb-2'>
            <img className='w-1/6' src={props.product.image} alt={props.product.title}/>
            <p>{props.product.title}</p>
            <span className='font-bold'>
                {props.product.price} $
            </span>
        </div>
    )
}

export default Product