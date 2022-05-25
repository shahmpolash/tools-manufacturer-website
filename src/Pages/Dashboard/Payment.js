import React from 'react';
import { useParams } from 'react-router-dom';
import usePayment from '../../hooks/usePayment';

const Payment = () => {
    const { id } = useParams();
    const [order] = usePayment(id)
    return (
        <div className='container text-center mt-5'>
            <h5>You are paying for: {order.itemname}</h5>
            <h2>Payable amount: ${(order.price)*(order.quantity)} for {order.quantity} pics</h2>
        </div>
    );
};

export default Payment;