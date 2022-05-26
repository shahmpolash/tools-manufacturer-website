import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
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

    const handleDelete = email =>{
        const proceed = window.confirm('Want to remove This Item')
        if(proceed){
            const url = `http://localhost:5000/order?email=${user.email}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                const remaining = orders.filter(order => order._id !== email);
                setOrders(remaining);
            })
        }
    }
    return (
        <div>
            <h2>My Order List: {orders.length}</h2>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Items</th>
                        <th scope="col">Qnty</th>
                        <th scope="col">Total Amounts</th>
                        <th scope="col">Pay</th>
                        <th scope="col">Cancel</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order, index)=> <tr>
                            <th scope="row">{index + 1}</th>
                            <td>{order.itemname}</td>
                            <td>{order.quantity}</td>
                            <td>${(order.price)*(order.quantity)} USD</td>
                            <td>
                                {(order.price && !order.paid) && <Link to={`/payment/${order._id}`}><button className='btn btn-primary'>Pay Now</button></Link>}

                                {(order.price && order.paid) && <button className='btn btn-primary'>Paid</button>}
                                
                                </td>
                                <td>
                                {(order.price && !order.paid) && <button className='btn btn-primary' onClick={() => handleDelete(order._id)}>X</button>}
                                </td>
                           
                            
                        </tr>)
                    }
                   
                    
                    
                </tbody>
            </table>
        </div>
    );
};

export default MyOrders;