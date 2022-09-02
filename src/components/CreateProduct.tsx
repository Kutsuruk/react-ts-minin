import {FormEvent, useState, ChangeEvent} from "react";
import {IProduct} from "../models";
import axios from "axios";
import ErrorMessage from "./ErrorMessage";

const productData: IProduct = {
    title: '',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic',
    rating: {
        rate: 1,
        count: 10
    }
}

const CreateProduct = () => {
    const [value, setValue] = useState('')
    const [error, setError] = useState('')

    const submitHandler = async (event: FormEvent) => {
        event.preventDefault()
        setError('')

        if (value.trim().length === 0) {
            setError('Please enter valid product title.')
            return
        }

        productData.title = value
        const response = await axios.post<IProduct>('https://fakestoreapi.com/products', productData)
    }

    const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    return(
        <form onSubmit={submitHandler}>
            <input
                onChange={changeHandler}
                type="text"
                className='border py-2 px-4 mb-2 w-full outline-0'
                placeholder='Enter product title...'
                value={value}
            />

            <ErrorMessage error={error} />

            <button type='submit' className='py-2 px-4 border bg-green-500 hover:text-white'>Add product</button>
        </form>
    )
}

export default CreateProduct