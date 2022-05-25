import React from 'react';
import mysel from '../images/myself.jpg';
import './Portfolio.css';

const Portfolio = () => {
    return (
        <div className='portfolio'>
            <h2 className='container text-center'>I 'M Shah M Polash</h2>
            <div className='d-flex container'>
                <img className='mr-5' src={mysel} alt="" />
                <p className='d-flex align-items-center'>I have been started online working since 2010.. I am 29 and a professional Adsense and also Amazon affiliate marketing niche site builder. <br></br><br></br> I build profitable Google AdSense and Amazon affiliate money-making website and I flip on the flipping marketplace. Each website makes per month $200-$500.<br></br><br></br>
Average I sell an established money making website for $5k to $15k.

Now I am providing niche site building service on this website. Now I already have a team with 10 members.

Having worked online for over 10 years now I understand how to rank a website or how to make a good profit from a website.</p>
            </div>
            <div className='container mt-5'>
                <h1>My Recent Projects</h1>
                <h2>1)<a href="https://shahmpolash.github.io/my-name-is-shah/"> HTML Webpage Design</a></h2>
                <h2>2)<a href="https://shahmpolash.github.io/ecommerce/"> eCommerce HTML Webpage Design</a></h2>
                <h2>3)<a href="https://nifty-ptolemy-543383.netlify.app/"> Service Based HTML Webpage Design</a></h2>
                <h2>4)<a href="https://thirsty-pasteur-1349ac.netlify.app/">JavaScript Project 1</a></h2>
                <h2>5)<a href="https://nostalgic-hawking-a67de2.netlify.app/"> JavaScript Project 2</a></h2>
                <h2>6)<a href="https://harmonious-bublanina-caab6b.netlify.app/">React JS Project 1</a></h2>
                <h2>7)<a href="https://toy-house-3d775.web.app/">Wholesale Store React JS Project</a></h2>
            </div>
        </div>
    );
};

export default Portfolio;