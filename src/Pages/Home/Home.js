import React from 'react';
import AllReviews from './AllReviews';
import Items from './Items';
import Slider from './Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Items></Items>
            <AllReviews></AllReviews>
        </div>
    );
};

export default Home;