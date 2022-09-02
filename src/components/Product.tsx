import React, {useState} from "react";
import {IProduct} from "../models";

interface ProductProps {
    product: IProduct
}

const  Product = (props: ProductProps) => {
    const [details, setDetails] = useState(false)
    const btnBgClassName = details ? 'bg-red-400' : 'bg-blue-400'

    const btnClasses = ['py-2 px-2 border', btnBgClassName]

    return(
        <div className='border py-2 px-4 rounded flex flex-col items-center mb-2'>
            <img className='w-1/6' src={props.product.image} alt={props.product.title}/>
            <p>{props.product.title}</p>
            <span className='font-bold'>{props.product.price} $</span>

            <button
                className={btnClasses.join(' ')}
                onClick={() => setDetails(prevState => !prevState)}
            >
                {details ? 'Hide details' : 'Show details'}
            </button>

            { details &&
                <div className=''>
                    <p>{ props.product.description }</p>
                    <p>Rate: <span style={{fontWeight: 'bold'}}>{props.product?.rating?.rate}</span></p>
                </div>
            }
        </div>
    )
}

export default Product