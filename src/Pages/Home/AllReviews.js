import React, { useEffect, useState } from 'react';
import './AllReviews.css';

const AllReviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://whispering-oasis-90698.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data));

    }, [])

    return (
        <div className='container mt-5'>
            <h2 className='text-center'>What Customers Says</h2>
                <div className='d-flex review'>

                {
                    reviews.slice(0,3).map(review =>
                        <div class="card-group">
                <div className="card mx-2 customer-review">
                    <img className='customer-img' src={review.img} class="card-img-top" alt="..."/>
                        <div class="card-body mx-2">
                            <h4 class="card-title text-center">{review.name}</h4>
                            <h5 class="card-title text-center">{review.position}</h5>
                            <p class="card-text text-center">Rating:{review.rating}</p>
                            <p class="card-text text-center">{review.review}</p>
                           
                        </div>
                </div>
  
            </div>  )
                }
                </div>
        </div>
    );
};

export default AllReviews;