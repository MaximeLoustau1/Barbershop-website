import React from 'react'
import Barber from './Barber'
import Review from './Review'
import barber1 from './assets/barber1.jpg';
import barber2 from './assets/barber2.jpg';
import barber3 from './assets/barber3.jpg';
import './Team.css'

function Team() {
    return(
        <section id="team-section">
            <h1 className="team-title">Our Barbers</h1>
            <hr />
            <div className="team-cards">
                <Barber  class="card" img={barber1} name="Tjeu" description="Expert in classic and modern cuts."/>
                <Barber  class="card img2" img={barber2} name="Patricia" description="Expert in classic and modern cuts."/>
                <Barber  class="card" img={barber3} name="Faishol" description="Expert in classic and modern cuts."/>
            </div>
            <div className="reviews">
                <div className="review-caroussel">
                    <Review class="review-card"/>
                    <Review class="review-card"/>
                    <Review class="review-card"/>
                    <Review class="review-card"/>
                    <Review class="review-card"/>
                    <Review class="review-card"/>
                </div>
                <div className="review-caroussel">
                    <Review class="review-card"/>
                    <Review class="review-card"/>
                    <Review class="review-card"/>
                    <Review class="review-card"/>
                    <Review class="review-card"/>
                    <Review class="review-card"/>
                </div>
            </div>
        </section>
    )
}

export default Team