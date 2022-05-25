import React from 'react';
import AboutUs from '../Shared/AboutUs';
import AllReviews from './AllReviews';
import Items from './Items';
import Slider from './Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Items></Items>
            <AllReviews></AllReviews>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;