import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order?email=${user.email}`, {
                method: 'GET',
                headers:{
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {

                    if(res.status === 401 || res.status === 403){
                        navigate('/');
                    }
                    
                   return res.json()
                })
                .then(data => {
                    setOrders(data);
                });
        }
    }, [user])
    return (
        <div>
            <h2>My Order List: {orders.length}</h2>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Item</th>
                        <th scope="col">Quantity</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order, index)=> <tr>
                            <th scope="row">{index + 1}</th>
                            <td>{order.itemname}</td>
                            <td>{order.quantity}</td>
                            
                        </tr>)
                    }
                   
                    
                    
                </tbody>
            </table>
        </div>
    );
};

export default MyOrders;