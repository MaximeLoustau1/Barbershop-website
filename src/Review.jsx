import React from 'react'
import './Review.css'
import star from './assets/star-7207.svg'
import pfp from './assets/review1-pfp.png'

function Review(props) {
    return (
        <div className={props.class}>
            <div className="stars-container">
                <img className="star-img" src={star} alt="" />
                <img className="star-img" src={star} alt="" />
                <img className="star-img" src={star} alt="" />
                <img className="star-img" src={star} alt="" />
                <img className="star-img" src={star} alt="" />
            </div>
            <div className="review-description">
                <p>Best barber by far in amstelveen area. 
                    Been going here for past 5 years. 
                    Thank you to Tjeu and Patricia for looking after me and my family</p>
            </div>
            <div className="review-profile">
                <img className="review-pfp" src={pfp} alt="" />
                <h3 className="review-name">Oliver Kassam</h3>
            </div>
        </div>
    )
}

export default Review