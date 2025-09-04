import React from "react";
import Header from "../Components/Header/Header.jsx";
import HeroCarousel from "../Components/Hero/Hero.jsx";
import ServicesSection from "../Components/Services/ServiceSection.jsx";
import TestimonialsSection from "../Components/Testimonials/Testimonials.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import AboutSection from "../Components/AboutSection/AboutSection.jsx";

function HomePage() {
  return (
    <>
      <Header />
      <HeroCarousel />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <Footer />
    </>
  );
}

export default HomePage;
