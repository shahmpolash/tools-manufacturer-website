import React from 'react';
import { useParams } from 'react-router-dom';
import useItemDetail from '../hooks/useItemDetail';

const OrderItem = () => {  
    const {itemId} = useParams();
    const [item] = useItemDetail(itemId);
    

    return (
        <div className='container w-50 mx-auto'>
        <h2>Pay For:</h2>
        <h4>{item.name}</h4>
        <img className='checkout-img' src={item.img} alt="" />
        <h4>Availavle Quantity: {item.available}</h4>
        <h4>Minimum Order: {item.minimum}</h4>
        <form>
         <input type="text" value={item.name} disabled name="name" id="" />
            <br />
            <br />
          

        <input type="number" min={item.minimum} max={item.available} name="quentity" id="" placeholder= {item.minimum} />
        <br />
            <br />
        <input type="submit" value="Pay Now" />
        </form>
    </div>
    );
};

export default OrderItem;