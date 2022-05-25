import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

const Payment = () => {

    const { id } = useParams();
    const url = `http://localhost:5000/order/${id}`;
    const { data: item, isLoading } = useQuery(['order', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <h2>Loading</h2>
    }
    return (
        <div className='container'>
            <h2>Make Payment {item.name}</h2>
            <h2>Pay for {id}</h2>
           
        </div>
    );
};

export default Payment;