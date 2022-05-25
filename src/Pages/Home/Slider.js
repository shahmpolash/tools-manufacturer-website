import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../images/banner-img-1.jpg';
import banner2 from '../../images/banner-img-2.jpg';


const Slider = () => {
    return (
        <div className='container'>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-auto"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-auto"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                       
                    </Carousel.Caption>
                </Carousel.Item>
               
            </Carousel>
        </div>
    );
};

export default Slider;