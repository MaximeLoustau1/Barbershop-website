import React from 'react'
import Barber from './Barber'
import Review from './Review'
import barber1 from './assets/barber1.jpg'
import barber2 from './assets/barber2.jpg'
import barber3 from './assets/barber3.jpg'
import pfp1 from './assets/review1-pfp.png'
import pfp2 from './assets/review2-pfp.png'
import pfp3 from './assets/review3-pfp.png'
import pfp4 from './assets/review4-pfp.png'
import pfp5 from './assets/review5-pfp.png'
import pfp6 from './assets/review6-pfp.png'
import './Team.css'

function Team({language}) {
    return(
        <section id="team-section">
            <h1 className="team-title">{language === 'EN' ? "Our Barbers" : "Onze Kappers"}</h1>
            <hr />
            <div className="team-cards">
                <Barber  class="card" img={barber1} name="Tjeu" description={language === 'EN' ? "Expert in classic and modern cuts." : "Expert in klassieke en moderne kapsels"}/>
                <Barber  class="card img2" img={barber2} name="Patricia" description={language === 'EN' ? "Expert in classic and modern cuts." : "Expert in klassieke en moderne kapsels"}/>
                <Barber  class="card" img={barber3} name="Faishol" description={language === 'EN' ? "Expert in classic and modern cuts." : "Expert in klassieke en moderne kapsels"}/>
            </div>
            <div className="reviews">
                <div className="review-caroussel">
                    <Review class="review-card" profilePic={pfp1} name="Oliver Kassam" 
                        description={language === 'EN' ? "Best barber by far in amstelveen area. Been going here for past 5 years. Thank you to Tjeu and Patricia for looking after me and my family" : "Veruit de beste kapper in de omgeving van Amstelveen. Ik ga hier al 5 jaar. Bedankt aan Tjeu en Patricia voor het zorgen voor mij en mijn gezin"}/>
                    <Review class="review-card" profilePic={pfp2} name="Melody Rae" 
                        description={language === 'EN' ? "They offer excellent customer service and inclusive for people like my son who have autism and struggles with things like haircuts!" : "Ze bieden uitstekende klantenservice en inclusief voor mensen zoals ik zoon die autisme heeft en worstelt met zaken als kapsels!"}/>
                    <Review class="review-card" profilePic={pfp3} name="C Sip" 
                        description={language === 'EN' ? "Great place! I went 2 months ago and I really liked it, they did a great job and were very professionals." : "Geweldig plek! Ik ging 2 maanden geleden en ik vond het erg leuk, ze hebben geweldig werk geleverd en waren zeer professionals."}/>
                    <Review class="review-card" profilePic={pfp4} name="Andrii Prokopets" 
                        description={language === 'EN' ? "Nice family barbershop. I liked my new haircut. Hairdresser speaks English and very professional." : "Leuke familie kapperszaak. Ik vond mijn nieuwe kapsel leuk. Kapper spreekt Engels en zeer professioneel."}/>
                    <Review class="review-card" profilePic={pfp5} name="Tobias Russel" 
                        description={language === 'EN' ? "Very nice, I've been coming here all my life. The haircuts are good, nothing crazy, just good and as desired." : "Heel fijn, ik kom hier al mijn hele leven. De kapsels zijn goed, niks geks, gewoon goed en naar wens."}/>
                    <Review class="review-card" profilePic={pfp6} name="Paul Rueckert" 
                        description={language === 'EN' ? "Great haircut by Faisholl! What nice people at this great neighborhood hairdresser! They work by appointment and on time." : "Geweldig kapsel van Faisholl! Wat een aardige mensen bij deze geweldige buurtkapper! Ze werken op afspraak en op tijd."}/>
                </div>
                <div className="review-caroussel">
                <Review class="review-card" profilePic={pfp1} name="Oliver Kassam" 
                        description={language === 'EN' ? "Best barber by far in amstelveen area. Been going here for past 5 years. Thank you to Tjeu and Patricia for looking after me and my family" : "Veruit de beste kapper in de omgeving van Amstelveen. Ik ga hier al 5 jaar. Bedankt aan Tjeu en Patricia voor het zorgen voor mij en mijn gezin"}/>
                    <Review class="review-card" profilePic={pfp2} name="Melody Rae" 
                        description={language === 'EN' ? "They offer excellent customer service and inclusive for people like my son who have autism and struggles with things like haircuts!" : "Ze bieden uitstekende klantenservice en inclusief voor mensen zoals ik zoon die autisme heeft en worstelt met zaken als kapsels!"}/>
                    <Review class="review-card" profilePic={pfp3} name="C Sip" 
                        description={language === 'EN' ? "Great place! I went 2 months ago and I really liked it, they did a great job and were very professionals." : "Geweldig plek! Ik ging 2 maanden geleden en ik vond het erg leuk, ze hebben geweldig werk geleverd en waren zeer professionals."}/>
                    <Review class="review-card" profilePic={pfp4} name="Andrii Prokopets" 
                        description={language === 'EN' ? "Nice family barbershop. I liked my new haircut. Hairdresser speaks English and very professional." : "Leuke familie kapperszaak. Ik vond mijn nieuwe kapsel leuk. Kapper spreekt Engels en zeer professioneel."}/>
                    <Review class="review-card" profilePic={pfp5} name="Tobias Russel" 
                        description={language === 'EN' ? "Very nice, I've been coming here all my life. The haircuts are good, nothing crazy, just good and as desired." : "Heel fijn, ik kom hier al mijn hele leven. De kapsels zijn goed, niks geks, gewoon goed en naar wens."}/>
                    <Review class="review-card" profilePic={pfp6} name="Paul Rueckert" 
                        description={language === 'EN' ? "Great haircut by Faisholl! What nice people at this great neighborhood hairdresser! They work by appointment and on time." : "Geweldig kapsel van Faisholl! Wat een aardige mensen bij deze geweldige buurtkapper! Ze werken op afspraak en op tijd."}/>
                </div>
            </div>
        </section>
    )
}

export default Team