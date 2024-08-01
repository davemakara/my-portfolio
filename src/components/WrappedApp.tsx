import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RootLayout from "../pages/Root";
import App from "../App";
import ProjectDetail from "../pages/ProjectDetail";

const WrappedApp = () => {
  return (
    <Router>
      <RootLayout>
        <Routes>
          <Route path="/*" element={<App />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
        </Routes>
      </RootLayout>
    </Router>
  );
};

export default WrappedApp;
