import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./Pages/HomePage.jsx";
import AboutPage from "./Pages/AboutPage.jsx";
import GalleryPage from "./Pages/Gallery.jsx";
import ContactPage from "./Pages/Contact.jsx";
import StructuralDesign from "./Pages/ServicesPages/StructuralDesign.jsx";
import CivilEngineering from "./Pages/ServicesPages/CivilEngineering.jsx";
import ConsultancyService from "./Pages/ServicesPages/ConsultancyService.jsx";
import StructuralDrawingService from "./Pages/ServicesPages/StructuralDrawingService.jsx";
import RoofDesignService from "./Pages/ServicesPages/RoofDesignService.jsx";
import ArchitecturalServices from "./Pages/ServicesPages/ArchitecturalServices.jsx";
import PreFabricatedStructure from "./Pages/ServicesPages/PreFabricatedStructure.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about-us",
        element: <AboutPage />,
      },
      {
        path: "/gallery",
        element: <GalleryPage />,
      },
      {
        path: "/contact-us",
        element: <ContactPage />,
      },
      {
        path: "/structural-design-consultant-services",
        element: <StructuralDesign />,
      },
      {
        path: "/civil-engineering-service",
        element: <CivilEngineering />,
      },
      {
        path: "/consultancy-services",
        element: <ConsultancyService />,
      },
      {
        path: "/structural-drawing-service",
        element: <StructuralDrawingService />,
      },
      {
        path: "/roof-design-services",
        element: <RoofDesignService />,
      },
      {
        path: "/architectural-services",
        element: <ArchitecturalServices />,
      },
      {
        path: "/pre-fabricated-structure",
        element: <PreFabricatedStructure />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
