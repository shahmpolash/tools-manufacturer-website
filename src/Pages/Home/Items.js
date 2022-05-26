import React, { useEffect, useState } from 'react';
import Item from './Item';
import './item.css';

const Items = () => {

    const [items, setItems] = useState([]);

    useEffect( () =>{
        fetch('https://whispering-oasis-90698.herokuapp.com/item')
        .then(res=>res.json())
        .then(data=>setItems(data));
    }, [])

    return (
        <div>
            <h2 className='item-title'>Available Items</h2>
            <div className='items container'>
            
            {
                items.slice(0,3).map(item => <Item 
                    key={item._id}
                    item={item}
                ></Item>)
            }
        </div>
        </div>
    );
};

export default Items;