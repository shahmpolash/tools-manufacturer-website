import React from 'react';
import { useNavigate } from 'react-router-dom';
import './item.css';

const Item = ({ item }) => {
    const {_id, name, price, minimum, available, description, img } = item;
    const navigate = useNavigate();
    const navigateToItemDetail = id =>{
        navigate(`/item/${id}`);
        

    }
    return (
        <div className='item'>
            <img src={img} alt="" />
            <h4>{name}</h4>
            <h5>Price per pic ${price} USD</h5>
            <p>{description}</p>
            <div className='quantity'>
                <p>Available {available} pics</p>
                <p>Minimum Order {minimum} pics</p>
            </div>
            <button onClick={() => navigateToItemDetail(_id)} >Order Now</button>
        </div>
    );
};

export default Item;