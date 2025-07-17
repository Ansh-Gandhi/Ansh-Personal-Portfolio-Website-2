import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import ExperienceTimeline from "./components/ExperienceTimeline";
import ProjectsCarousel from "./components/ProjectsCarousel";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <hr className="section-separator" />
      <ExperienceTimeline />
      <hr className="section-separator" />
      <ProjectsCarousel />
      <hr className="section-separator" />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
