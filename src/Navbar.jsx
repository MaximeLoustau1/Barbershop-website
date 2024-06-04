import React, { useState } from 'react'
import Button from './Button'
import Toggle from './Toggle'
import './Navbar.css'

function Navbar({language, setLanguage}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    function hideSideBar() {
        const navbarContainer = document.querySelector('.navbar-container');
        navbarContainer.classList.remove('show');
        const hamburgerICon = document.querySelector('.menu-icon');
        hamburgerICon.classList.remove('open');
    }

    return(
        <section id="navbar-section">
            <div className={isMenuOpen ? 'menu-icon open' : 'menu-icon'} onClick={handleMenuClick}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
            <div className={isMenuOpen ? 'show navbar-container' : 'navbar-container'}>
                <div className="navbar-menu">
                    <div className="navbar-menu-item" onClick={hideSideBar}><a href='#about-section'>{language === 'EN' ? "About" : "Over Ons"}</a></div>
                    <div className="navbar-menu-item prices-item" onClick={hideSideBar}><a href='#team-section'>Team</a></div>
                    <div className="navbar-menu-item" onClick={hideSideBar}><a href='#services-section'>{language === 'EN' ? "Prices" : "Prijzen"}</a></div>
                    <div className="navbar-menu-item" onClick={hideSideBar}><a href='#schedule-section'>Contact</a></div>
                </div>

                <div className="navbar-cta">
                    <Button link="#calendar" class="btn small-btn" text={language === 'EN' ? "Book Now" : "Boek nu"}/>
                    <Toggle language={language} setLanguage={setLanguage}/>
                </div>
            </div>
            
        </section>
        
    ) 
}

export default Navbar
