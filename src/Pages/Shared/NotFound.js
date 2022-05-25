import React from 'react';
import notfound from '../../images/notfound.jpg';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='container notfound'>
            <h1>Sorry! The page is not Found</h1>
            <img src={notfound} alt="" />
            <a href="/">Go back to Home</a>
        </div>
    );
};

export default NotFound;