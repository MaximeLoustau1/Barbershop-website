import "./About.css";
import Button from "./Button";
import image from "./assets/about-image.jpeg";

function About() {
  return (
    <section id="about-section">
      <div className="about-card">
        <h1 className="about-title">Barbershop Just For Men</h1>
        <p className="about-description">
          Amstelveen's go-to for expert grooming. With over 40 years of combined
          experience, our team ensures precision cuts and personalized service.
        </p>
        <Button class="btn large-btn" text="Book Now"/>
        <Button class="btn secondary-btn" text="Prices" />
      </div>
      
      <div className="about-image">
        <img src={image} alt="hipster barber"/>
      </div>
    </section>
  );
}

export default About;
