import React from 'react';
import { useParams } from 'react-router-dom';
import usePayment from '../../hooks/usePayment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L0iFOHYRbzBoepBIatnCVtApveRFaTmhw8Ijm5W6NFlFDvruSWcOFr50PLLcwz5U3UeEaMrTOhDMT6Jq8ZYxAIl00wfMhOesc');

const Payment = () => {
    const { id } = useParams();
    const [order] = usePayment(id)
    return (
        <div className='container text-center mt-5'>
            <h5>You are paying for: {order.itemname}</h5>
            <h2>Payable amount: ${(order.price) * (order.quantity)} for {order.quantity} pics</h2>
            
            <Elements stripe={stripePromise}>
                <CheckoutForm order={order} />
            </Elements>
        </div>
    );
};

export default Payment;