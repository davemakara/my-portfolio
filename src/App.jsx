import React, { useState, useEffect, useRef } from "react";
import { Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BurgerMenu from "./components/BurgerMenu";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const [menuIsClicked, setMenuIsClicked] = useState(false);

  const handleButtonClick = () => {
    setIsOpen((prev) => !prev);
    setMenuIsClicked((prev) => !prev);
  };

  const handleNavClick = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
    window.history.pushState(null, null, `#${ref.current.id}`);
  };

  return (
    <>
      <Header
        onButtonClick={handleButtonClick}
        displayMenu={menuIsClicked}
        homeRef={homeRef}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
      {isOpen && <BurgerMenu onButtonClick={handleButtonClick} />}
      <Routes>
        <Route path="/" element={<Homepage homeRef={homeRef} />} />

        <Route path="/about" element={<AboutPage aboutRef={aboutRef} />} />

        <Route
          path="/projects"
          element={<ProjectsPage projectsRef={projectsRef} />}
        />

        <Route
          path="/contact"
          element={<ContactPage contactRef={contactRef} />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
