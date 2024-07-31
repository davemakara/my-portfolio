import React, { useState, useRef, useEffect } from "react";
import Homepage from "./pages/Homepage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BurgerMenu from "./components/BurgerMenu";
import LoadingProject from "./components/LoadingProject";

const App = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const [isMounted, setIsMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [menuIsClicked, setMenuIsClicked] = useState(false);

  const handleButtonClick = () => {
    setIsOpen((prev) => !prev);
    setMenuIsClicked((prev) => !prev);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsMounted(true);
    }, 3000);
  });

  const sections = [
    { ref: homeRef, path: "/" },
    { ref: aboutRef, path: "/about" },

    { ref: contactRef, path: "/contact" },
  ];

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          window.history.replaceState(null, "", entry.target.dataset.path);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.6,
    });

    sections.forEach(({ ref }) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      sections.forEach(({ ref }) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [sections]);

  useEffect(() => {
    const handlePathChange = () => {
      const { pathname } = window.location;
      const section = sections.find((sec) => sec.path === pathname);
      if (isMounted && section) {
        section.ref.current.scrollIntoView({ behavior: "smooth" });
      }
    };

    handlePathChange();

    window.addEventListener("popstate", handlePathChange);

    return () => {
      window.removeEventListener("popstate", handlePathChange);
    };
  }, [sections]);

  return (
    <>
      {!isMounted ? (
        <LoadingProject />
      ) : (
        <>
          <Header
            onButtonClick={handleButtonClick}
            displayMenu={menuIsClicked}
            homeRef={homeRef}
            aboutRef={aboutRef}
            contactRef={contactRef}
          />
          {isOpen && <BurgerMenu onButtonClick={handleButtonClick} />}
          <div id="home" ref={homeRef} data-path="/">
            <Homepage />
          </div>
          <div id="about" ref={aboutRef} data-path="/about">
            <AboutPage />
          </div>
          {/* <div id="projects" ref={projectsRef} data-path="/projects">
            <ProjectsPage />
          </div> */}
          <div id="contact" ref={contactRef} data-path="/contact">
            <ContactPage />
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
