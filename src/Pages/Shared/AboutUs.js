import React from 'react';
import aboutimg from '../../images/about-img.jpg';
import about1 from '../../images/about1.jpg';
import about2 from '../../images/about2.jpg';
import about3 from '../../images/about3.jpg';
import about4 from '../../images/about4.jpg';
import '../Shared/About.css';

const AboutUs = () => {
    return (
        <div>
            <div class="jumbotron text-center bg-primary">
                <h1>Shah Power Tools</h1>
                <p>We Are Power Tools Manufacturing Company</p>
            </div>
            <img className='w-100' src={aboutimg} alt="" />
            <h2 className='text-center'>Our Team Members</h2>
            <div className='about container'>
                
                <div>
                    <img src={about1} alt="" />
                <h2>Jack Reed</h2>
                </div>
                
                <div>
                    <img src={about2} alt="" />
                    <h2>Mr Harst</h2>
                </div>
                <div>
                    <img src={about3} alt="" />
                    <h2>Mark Budding</h2>
                </div>
                <div>
                    <img src={about4} alt="" />
                    <h2>Abu Hasan Khan</h2>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;