import "./About.css";
import Button from "./Button";
import Navbar from './Navbar.jsx';

function About({language, setLanguage}) {
  return (
    <section id="about-section">
      <div className="background-img"></div>
      <Navbar language={language} setLanguage={setLanguage}/>
      <div className="about-card">
        <h1 className="about-title">Barbershop Just For Men</h1>
        <p className="about-description">{language === 'EN' ? "Amstelveen's go-to for expert grooming. With over 40 years of combined experience, our team ensures precision cuts and personalized service." : "Amstelveen's go-to voor deskundige verzorging. Met meer dan 40 jaar ervaring staat ons team garant voor nauwkeurige sneden en persoonlijke service."}</p>
        <Button link="#calendar" class="btn-about large-btn" text={language === 'EN' ? "Book Now" : "Boek nu"}/>
        <Button link="#services-section" class="btn-about secondary-btn" text={language === 'EN' ? "Prices" : "Prijzen"} />
      </div>
    </section>
  );
}

export default About;
