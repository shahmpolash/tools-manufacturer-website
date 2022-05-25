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
                <p>Founded in 2022, Shah Power Tools LTD. has become a professional manufacturer mainly for electric tools and scooters.As a professional designing, manufacturing company, Relying on professional technical team and production team, our company is striving to become a real professional supplier, to provide full solution to customers worldwide. 
                    
                    <br />
                    we designs, manufactures and quality controls for all products. And also provide most economical means to assure customers to get satisfactory services, such as guaranteed quality, competitive prices, and short-period delivery. We endeavor to make the customers satisfied through in sight of a problem by their means. To innovate with the master spirit and carry out revolution to develop teamwork.To improve continuously. And to do everything honestly, trustfully, transparently, rapidly and easily.</p>
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