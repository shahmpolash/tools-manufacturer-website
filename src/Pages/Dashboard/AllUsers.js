import React, { useEffect, useState } from 'react';
import UserRow from './UserRow';

const AllUsers = () => {
    const [users, setUsers, refetch] = useState([]);
    useEffect( () =>{
        fetch('http://localhost:5000/user', {
            method: 'GET',
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>res.json())
        .then(data=>setUsers(data))
    }, [])
    return (
        <div>
            <h2>Users: {users.length} </h2>
            <table class="table">
                <thead>
                   
                </thead>
                <tbody>
                    {
                        users.map(user => <UserRow
                        key={user._id}
                        user={user}
                        refetch={refetch}
                        ></UserRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllUsers;