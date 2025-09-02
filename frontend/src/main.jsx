import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import JobsDashboard from "./pages/JobsDashboard.jsx";
import JobDescription from "./pages/JobDescription.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

const router = createBrowserRouter([
  { path: "/", element: <JobsDashboard /> },
  { path: "/job/:id", element: <JobDescription /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
