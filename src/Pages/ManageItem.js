import React from 'react';
import useItems from '../hooks/useItems';
import './ManageItem.css';

const ManageItem = () => {
const [items, setItems] = useItems();

const handleDelete = id =>{
    const proceed = window.confirm('Want to remove This Item')
    if(proceed){
        const url = `https://whispering-oasis-90698.herokuapp.com/item/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            const remaining = items.filter(item => item._id !== id);
            setItems(remaining);
        })
    }
}
    
    return (
        <div className='container w-50 mx-auto'>
            <h2>Manage Items</h2>
            {
                items.map(item => <div key={item._id}>
                    
                    <div className='d-flex manage'>
                        <img src={item.img} alt="" />
                        
                        <h5>{item.name}</h5>
                        <button className='button' onClick={() => handleDelete(item._id)} >X</button>
                    </div>
                </div>)
            }
        </div>
    );
};

export default ManageItem;