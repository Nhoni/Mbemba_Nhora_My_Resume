import React from "react";
import "./index.css";

import Footer from "./components/Footer";

import HeroSection from "./components/HeroSection";
import ContactSection from "./components/ContactSection";
import AboutSection from "./components/AboutSection";
import FactSection from "./components/FactSection";
import SkillsSection from "./components/SkillSection";
import ResumeSection from "./components/ResumeSection";
import ServiceSection from "./components/ServiceSection";
import TestimonialSection from "./components/TestimonialSection";
import Navbar from "./components/NavBar";
import PortfolioSection from "./components/PortfolioSection";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FactSection />
      <SkillsSection />
      <ResumeSection />
      <PortfolioSection />
      <ServiceSection />
      <TestimonialSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
