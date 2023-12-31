import React from "react";
import "../index.css";
import bckImage from "../assets/hero-bg.jpg"
import { Link } from "react-router-dom";


const HeroSection = () => {
 
  return (
    <>
     <section id="hero" className="d-flex flex-column justify-content-center" style={{backgroundImage:`url(${bckImage})`,
    backgroundRepeat:`no-repeat`,
    backgroundPosition:'top',
    backgroundSsize: 'cover',
  position: 'relative'}}>
    <div className="container" data-aos="zoom-in" data-aos-delay="100">
      <h1>Brandon Johnson</h1>
      <p>I'm <span className="typed" data-typed-items="Designer, Developer, Freelancer, Photographer"></span></p>
      <div className="social-links">
        <Link to="#" className="twitter"><i className="bx bxl-twitter"></i></Link>
        <Link to="#" className="facebook"><i className="bx bxl-facebook"></i></Link>
        <Link to="#" className="instagram"><i className="bx bxl-instagram"></i></Link>
        <Link to="#" className="google-plus"><i className="bx bxl-skype"></i></Link>
        <Link to="#" className="linkedin"><i className="bx bxl-linkedin"></i></Link>
      </div>
    </div>
  </section>
    </>
   
  );
};

export default HeroSection;