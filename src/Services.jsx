import React from 'react'
import PriceCard from './PriceCard'
import './Services.css'

function Services() {
    return (
        <section id="services-section">
            <h1 className="services-title">What we offer</h1>
            <div className="grid-container">
                <div className="services-container">
                    <PriceCard title="Men's Haircuts" price="31.50€"/>
                    <PriceCard title="Women's Haircuts" price="35€"/>
                    <PriceCard title="Students and Children" price="26€"/>
                    <PriceCard title="Beard Trimming" price="19.5€"/>
                    <PriceCard title="Hair Colouring" price="18.5€"/>
                    <PriceCard title="Hair washing and Coffee" price="Free"/>
                </div>
            </div>
        </section>
    )
}

export default Services