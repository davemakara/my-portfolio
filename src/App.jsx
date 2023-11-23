import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/Root";
import Homepage from "./pages/Homepage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "", element: <Homepage /> },
      { path: "about", element: <AboutPage /> },
      { path: "projects", element: <ProjectsPage /> },
      { path: "contact", element: <ContactPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
  // return (
  // <Router>
  //   <RootLayout>
  //     <Routes>
  //       <Route path="/my-portfolio" element={<Homepage />} />
  //       <Route path="/my-portfolio/about" element={<AboutPage />} />
  //       <Route path="/my-portfolio/projects" element={<ProjectsPage />} />
  //       <Route path="/my-portfolio/contact" element={<ContactPage />} />
  //     </Routes>
  //   </RootLayout>
  // </Router>
  // );
}

export default App;
