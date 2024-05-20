import "./About.css";
import Button from "./Button";
import Navbar from './Navbar.jsx'


function About() {
  return (
    <section id="about-section">
      <div className="background-img"></div>
      <Navbar />
      <div className="about-card">
        <h1 className="about-title">Barbershop Just For Men</h1>
        <p className="about-description">
          Amstelveen's go-to for expert grooming. With over 40 years of combined
          experience, our team ensures precision cuts and personalized service.
        </p>
        <Button class="btn large-btn" text="Book Now"/>
        <Button class="btn secondary-btn" text="Prices" />
      </div>
    </section>
  );
}

export default About;
