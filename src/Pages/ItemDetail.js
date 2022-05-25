import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../firebase.init';
import useItemDetail from '../hooks/useItemDetail';
import './ItemDetail.css';

const ItemDetail = () => {
    const [user] = useAuthState(auth);
    const { itemId } = useParams();
    const [item] = useItemDetail(itemId);

   
    

    const handleOrder = event =>{
        event.preventDefault();
        const itemname = event.target.itemname.value;
        const quantity = event.target.quantity.value;
        const price = event.target.price.value;
        const phone = event.target.phone.value;
        const name = event.target.name.value;
        const address = event.target.address.value;
        const email = event.target.email.value;
        
        const order ={itemname, quantity, price, address, phone, email, name};

      

        const url = `http://localhost:5000/order/`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res=>res.json())
        .then(result=> {
            console.log('Connected', result);
            alert('Your order is placed. Now process Payment');
        })
    
    };
    

    return (
        <div className='container w-50 mx-auto'>
            <h2>You are ordering {item.name}</h2>
            
            <img src={item.img} alt="" />
            <h3>Price: ${item.price} per pics</h3>
            <p>{item.description}</p>
            <h5>Available Quentity {item.available}</h5>
            <h5>Minimum Order {item.minimum}</h5>
            <h2>Order Now</h2>
            <form onSubmit={handleOrder}>
                <input type="text" value={item.name} disabled name="itemname" id="" />
                <br />
                <br />
                <input type="number" name="quantity" id="" placeholder='Quantity' />
                <br />
                <br />
                <input type="number" name="price" id="" />
                <br />
                <br />
                <h5>Your Details</h5>
                <input type="text" value={user.displayName} name="name" id="" placeholder='Your Full Name'  />
                <br /><br />
                <input type="text" value={user.email} name="email" id="" placeholder='Your Email'  />
                <br /><br />
                <input type="number" name="phone" id="" placeholder='Your Phone' />
                <br /><br />
                <textarea type="text" name="address" id="" placeholder='Address'  />
                <br /><br />
                <input type="submit" value="Place Order" />
            </form>
            
        </div>
    );
};

export default ItemDetail;