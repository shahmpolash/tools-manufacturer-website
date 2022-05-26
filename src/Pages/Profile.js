import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const Profile = () => {
    const [user] = useAuthState(auth);

    const handleUpdateUser = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;

        const updatedUser = {name, email};

        // send data to the server
        const url = `http://localhost:5000/user/`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
        .then(res => res.json())
        .then(data =>{
            console.log('success', data);
            alert('users added successfully!!!');
            event.target.reset();
        })
    }

    return (
        <div>
            <h2>Updating User: {user.name}</h2>
            <form onSubmit={handleUpdateUser}>
                <input type="text" name="name" placeholder='Name' required />
                <br />
                <input type="email" name="email" placeholder='Email' required />
                <br />
                <input type="submit" value="Update User" />
            </form>
        </div>
    );
};

export default Profile;