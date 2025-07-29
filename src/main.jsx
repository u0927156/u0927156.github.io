import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./main.css";
import App from "./App.jsx";
import Abba from "./pages/Abba/Abba.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/abba", element: <Abba /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
