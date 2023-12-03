import { Routes, Route } from "react-router-dom";

import RootLayout from "./pages/Root";
import Homepage from "./pages/Homepage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import ProjectDetail from "./pages/ProjectDetail";

function App() {
  return (
    <RootLayout>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:projectId" element={<ProjectDetail />} />

        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </RootLayout>
  );
}

export default App;
