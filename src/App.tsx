import { Router, Routes, Route } from "react-router-dom";

import React, { useState, useEffect } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import LoadingProject from "./components/LoadingProject";
import HomeContent from "./pages/HomeContent";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetail from "./pages/ProjectDetail";

const App = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsMounted(true);
    }, 3000);
  });

  return (
    <>
      {!isMounted ? (
        <LoadingProject />
      ) : (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<HomeContent />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
