import React from 'react';
import aboutimg from '../../images/about-img.jpg';

const AboutUs = () => {
    return (
        <div>
            <div class="jumbotron text-center bg-primary">
            <h1>Shah Power Tools</h1>
            <p>We Are Power Tools Manufacturing Company</p>
        </div>
        <img className='w-100' src={aboutimg} alt="" />
        </div>
    );
};

export default AboutUs;