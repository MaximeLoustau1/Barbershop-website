import React from 'react'
import Map from './Map.jsx'
import phone from './assets/reshot-icon-phone-YUPNL5R2TW.svg'
import email from './assets/email-icon.svg'
import pin from './assets/pin-icon.svg'
import './Schedule.css'

function Schedule() {
    return (
        <section id="schedule-section">
            <div className="schedule-container">
                <div className="barber-schedule">
                    <h2 className="schedule-title">Contact Us</h2>
                    <div className="schedules">
                        <div className="schedule-days">
                            <p>Mon</p>
                            <p>Tue</p>
                            <p>Wed</p>
                            <p>Thu</p>
                            <p>Fri</p>
                            <p>Sat</p>
                            <p>Sun</p>
                        </div>
                        <div className="schedule-hours">
                            <p>CLOSED</p>
                            <p>8:30am to 5:30pm</p>
                            <p>8:30am to 5:30pm</p>
                            <p>8:30am to 5:30pm</p>
                            <p>8:30am to 5:30pm</p>
                            <p>8:00am to 3:00pm</p>
                            <p>CLOSED</p>
                        </div>
                    </div>
                    <div className="phone-contact">
                        <img className="phone-icon" src={phone} alt="phone icon" /> 
                        <p>(+31) 020 643 8682</p>
                    </div>
                    <div className="email-contact">
                        <img className="email-icon" src={email} alt="email icon" />
                        <p>barbershopjustformen@live.nl</p>
                    </div>
                    <div className="location-contact">
                        <img className="location-icon" src={pin} alt="pin icon" />
                        <p>Bourgondischelaan 36, 1181 DD Amstelveen</p>
                    </div>
                </div>
                <Map class="map"/>
            </div>
        </section>
    )
}

export default Schedule