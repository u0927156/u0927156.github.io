import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./main.css";
import App from "./App.jsx";
import Abba from "./pages/Abba/Abba.jsx";
import Wordle from "./pages/Wordle/Wordle.jsx";
import Beans from "./pages/Beans/Beans.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/abba", element: <Abba /> },
  { path: "/wordle", element: <Wordle /> },
  { path: "/beans", element: <Beans /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
