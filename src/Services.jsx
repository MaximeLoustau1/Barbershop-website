import React from 'react'
import PriceCard from './PriceCard'
import './Services.css'

function Services({language}) {
    return (
        <section id="services-section">
            <h1 className="services-title">{language === 'EN' ? "What we offer" : "Wat Wij Bieden"}</h1>
            <div className="grid-container">
                <div className="services-container">
                    <PriceCard title={language === 'EN' ? "Men's Haircuts" : "Heren kapsels"} price="31.50€"/>
                    <PriceCard title={language === 'EN' ? "Men's Haircuts" : "Dames kapsels"} price="35€"/>
                    <PriceCard title={language === 'EN' ? "Students and Children" : "Student en kind knippen"} price="26€"/>
                    <PriceCard title={language === 'EN' ? "Beard Trimming" : "Baard trimmen"} price="19.5€"/>
                    <PriceCard title={language === 'EN' ? "Hair Colouring" : "Knippen en kleuren"} price="18.5€"/>
                    <PriceCard title={language === 'EN' ? "Hair washing and Coffee" : "Haar wassen en koffie"} price={language === 'EN' ? "Free" : "Gratis"}/>
                </div>
            </div>
        </section>
    )
}

export default Services