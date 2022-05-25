import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Review = () => {
    const [user] = useAuthState(auth);

    const handleReview = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const rating = event.target.rating.value;
        const review = event.target.review.value;
        const position = event.target.position.value;
        const img = event.target.img.value;

        const allReviews = { name, rating, review, position, img };



        const url = `http://localhost:5000/review/`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(allReviews)
        })
            .then(res => res.json())
            .then(data => {
                event.target.reset();
                alert('Review Posted');
            })

    };


    return (
        <div className='mt-5'>

            <form onSubmit={handleReview}>
                <div class="form-group">
                <label for="exampleFormControlTextarea1">Your Name</label>
                    <input type="text" value={user.displayName} name="name" class="form-control" id="exampleFormControlInput1" />
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Your Job Title</label>
                    <input type="text" name="position" class="form-control" id="exampleFormControlInput1" place />
                </div>
                <div class="form-group">
                    <label for="exampleFormControlSelect1">Your Rating</label>
                    <select name="rating" class="form-control" id="exampleFormControlSelect1">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Write Review</label>
                    <textarea name="review" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div class="form-group">
                <label for="exampleFormControlTextarea1">Profile Image URL</label>
                    <input type="text" name="img" class="form-control" id="exampleFormControlInput1" />
                </div>
                <div class="form-group">
                    <input type="submit" value="Post Review" />
                </div>
            </form>
        </div>
    );
};

export default Review;