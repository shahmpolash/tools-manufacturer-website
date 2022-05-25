import React from 'react';
import { useForm } from "react-hook-form";

const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const url = `http://localhost:5000/item/`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result=>{
            console.log(result);
        })

        
    };

    return (
        <div className='container w-50 mx-auto'>
            <h2>Add Available Items</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Item Name' {...register("name", { required: true, maxLength: 50 })} />
                <textarea className='mb-2' placeholder='Details'{...register("description")} />
                <input className='mb-2' placeholder='Price Per pis'type="price" {...register("price")} />
                <input className='mb-2' placeholder='Minimum Order'type="number" {...register("minimum")} />
                <input className='mb-2' placeholder='Available Items'type="number" {...register("available")} />
                <input className='mb-2' placeholder='Image URL'{...register("img")} />
                <input className='mb-2' value="+ Add Item" type="submit" />
            </form>
        </div>
    );
};

export default AddItem;