import { Routes, Route } from "react-router-dom";

import RootLayout from "./pages/Root";
import Homepage from "./pages/Homepage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <RootLayout />,
//     children: [
//       { path: "", element: <Homepage /> },
//       { path: "about", element: <AboutPage /> },
//       { path: "projects", element: <ProjectsPage /> },
//       { path: "contact", element: <ContactPage /> },
//     ],
//   },
// ]);

function App() {
  // return <RouterProvider router={router} />;
  return (
    <RootLayout>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </RootLayout>
  );
}

export default App;
