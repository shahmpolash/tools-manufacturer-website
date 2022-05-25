import React, { useEffect, useState } from 'react';
import Item from '../Pages/Home/Item';
import '../Pages/Home/item.css';

const AvailableItems = () => {
    const [items, setItems] = useState([]);

    useEffect( () =>{
        fetch('http://localhost:5000/item')
        .then(res=>res.json())
        .then(data=>setItems(data));
    }, [])

    return (
        <div>
            <h2 className='item-title'>Available Items</h2>
            <div className='items container'>
            
            {
                items.map(item => <Item 
                    key={item._id}
                    item={item}
                ></Item>)
            }
        </div>
        </div>
    );
};

export default AvailableItems;